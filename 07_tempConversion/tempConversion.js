const convertToCelsius = function (farenheit) {

  return Number((((farenheit - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  
  return Number(((celsius * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
