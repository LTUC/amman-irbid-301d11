'use strict';

let utilities = {};
utilities.randomNumberBetween = function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  utilities.stName = 'Razan';

  module.exports = utilities;