'use strict';


const myhelpers = require('./helpers.js');
const hours = ['7am', '8am', '9am'];

const Store = function(location, min, max, avg) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.projections = {};
  this.projectSales();
  Store.stores.push(this);
};

Store.stores = [];

// console.log(myhelpers);
Store.prototype.projectSales = function() {
  hours.forEach( (hour) => {
    this.projections[hour] = myhelpers.randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer;
  });
};

console.log(myhelpers.stName)

module.exports = Store;