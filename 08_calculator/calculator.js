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

const multiply = function([...numbers]) {
  
  let product = 1;

  for(let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  };

  return product;

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
