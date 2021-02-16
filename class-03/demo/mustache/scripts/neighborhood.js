'use strict';

let templateId = '#neighborhood-template';

let neighborhoods = [];

function Neighborhood (rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
}


Neighborhood.prototype.toHtml = function() {
  // Demo Part 1: Build it all with jQuery
  // $('#div1').append(`
  //   <h2>${this.name}</h2>
  //   <p>${this.city}</p>
  // `)

  // Demo Part 2: Use jQuery to clone
  // let container = $('.template').first().clone();
  // let container = $('.template').clone();
  // container.removeClass('template');
  // container.find('.name').text(this.name);
  // container.find('.city').text(this.city);
  // container.find('.population').text(this.population);
  // container.find('.founded').text(this.founded);
  // container.find('.body').text(this.body);
  // return container;
  
  // Demo Part 3: Mustache

  // get the template from HTML
  let template = $('#template-neigh').html();
  // use Mustache to render new html by merging the template with the object
  console.log(this);
  let newObj = Mustache.render(template,this);
  return newObj;


};


neighborhoodDataSet.forEach(neighborhoodObject => {
  var newObj = new Neighborhood(neighborhoodObject);
  neighborhoods.push(newObj);
  // newObj.toHtml()
  var renderedObj = newObj.toHtml();
  // console.log(renderedObj);
  $('#neighborhoods').append(renderedObj);
});
