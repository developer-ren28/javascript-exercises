const add = function(addend1, addend2) {
  return addSum = addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return difference = minuend - subtrahend;
};

const sum = function(array) {
	let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  };

  return total;
};

const multiply = function(multiplicand, multiplier) {
  return product = multiplicand * multiplier;
};

const power = function(base, exponent) {
	return solution = base ** exponent;
};

const factorial = function(num) {
  if (i > 1) {
    let i = num;
  
    while (i > 1) {
  
      num *= (i - 1)
      i--
    };
  
    return num;
  };

  return num;
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
