const add = function(a, b) {

  return a + b;
	
};

const subtract = function(a, b) {

  return a - b;
	
};

const sum = function(array) {

  let result = 0;


  for (let num of array){

    result += Number(num);

  }

  return result;
	
};

const multiply = function(array) {

  let result = 1;


  for (let num of array){

    result *= Number(num);

  }

  return result;

};

const power = function(base, exponent) {

  return base ** exponent;
	
};

const factorial = function(num) {

  if (num == 0) {
    return 1;
  }

  return num * factorial(num - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
