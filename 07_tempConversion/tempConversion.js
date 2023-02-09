const convertToCelsius = function(Ftemp) {

  return celsius = Math.round(((Ftemp - 32) * (5 / 9)) * 10) / 10;

};

const convertToFahrenheit = function(Ctemp) {

  return celsius = Math.round(((Ctemp * (5 / 9) + 32) ) * 10) / 10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
