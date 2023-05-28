const add = function(addend1, addend2) {
  return addSum = addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return difference = minuend - subtrahend;
};

const sum = function(array) {
  return array.reduce((total, num) => (total + num), 0);
};

const multiply = function([...numbers]) {
  return [...numbers].reduce((total, num) => (total * num), 1);
};

const power = function(base, exponent) {
	return solution = base ** exponent;
};

const factorial = function(num) {
  if (num === 1 || num === 0 ) {
    return 1;
  } else if (num > 1) {
    let i = num;
  
    while (i > 1) {
      num *= (i - 1)
      i--
    };
  
    return num;
  };
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
