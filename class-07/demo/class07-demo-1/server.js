'use strict';

// Application Dependencies
const express = require('express');
//CORS = Cross Origin Resource Sharing
const cors = require('cors');
//DOTENV (read our enviroment variable)
require('dotenv').config();
const superagent = require('superagent');


//Application Setup
const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());


// Routes Definitions
app.get('/',handleHomeRoute);
app.get('/location',locationHandler);
app.get('/weather',weatherHandler);
app.get('*',notFoundRouteHandler);
app.use(errorHandler);


// Route Handlers
function handleHomeRoute (request, response) {
    response.status(200).send('you did a great job');
}

//http://localhost:3000/location?city=Lynnwood
 function  locationHandler (req, res)  {
     console.log(req.query);
    const cityName = req.query.city;
    console.log(cityName);

    // https://eu1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
    let key = process.env.LOCATION_KEY;
    let url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;


    console.log('before superagent')
    superagent.get(url)
    .then(locData =>{
        // console.log(locData)
        console.log('inside superagent')
        const locationData = new Location(cityName, locData.body[0]);
        res.send(locationData);
    })
    .catch(()=>{
        errorHandler('Error in getting data from locationiq',req,res)
    })
    console.log('after superagent')



    // res.send('you are in thr location route');
    // const geoData = require('./data/geo.json');
    // // console.log(geoData);
    // const locationData = new Location(city, geoData[0]);
    // res.send(locationData);
}

//http://localhost:3000/weather

// http://localhost:3000/weather?search_query=amman&formatted_query=Amman%2C%2011181%2C%20Jordan&latitude=31.9515694&longitude=35.9239625&page=1
 function weatherHandler (req,res) {
  const geoData = require('./data/weatherbit.json');
//   console.log(geoData);
  var weatherDaily =[];
  geoData.data.forEach(val =>{
      var weatherData = new Weather(val);
      weatherDaily.push(weatherData);
  });
  res.send(weatherDaily);
}

 function notFoundRouteHandler (req, res) {
    res.status(404).send('Not Found');
}

function errorHandler(error, req, res) {
    res.status(500).send(error);
}


// Constructors
function Location(city, geoData) {
    // console.log(geoData);
    this.search_query = city;
    this.formatted_query = geoData.display_name;
    this.latitude = geoData.lat;
    this.longitude = geoData.lon;
}

function Weather(day) {
  this.forecast = day.weather.description;
  this.time = new Date(day.datetime).toString().slice(0,15);
}


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
