const add = function(num1, num2) {
	let result = 0;
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = 0;
  result = num1 - num2;
  return result;
};

const sum = function(numbs) {
	let result = 0;
  numbs.forEach(sumThem);
  
  function sumThem(item) {
    result += item;
  }
  return result;
};

const multiply = function(numbs) {
  let result = 1;
  numbs.forEach(multiplyThem);
  
  function multiplyThem(item) {
    result = result * item;
  }
  return result;
};

const power = function(num1, num2) {
	let result = 0
  result = num1 ** num2
  return result
};

const factorial = function(num) {
  let result = num;
  if (num == 0 || num == 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
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
