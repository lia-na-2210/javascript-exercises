const ftoc = function(temp) {
  let newTemp = (temp -32) * (5/9);
  if (newTemp == 0) {
    return newTemp;
  } else {
    newTemp = Number(newTemp.toFixed(1));
    return newTemp
  }
  
};

const ctof = function(temp) {
  let newTemp = (temp * (9/5)) + 32;
  if (newTemp == 0) {
    return newTemp;
  } else {
    newTemp = Number(newTemp.toFixed(1));
    return newTemp;
  }
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
