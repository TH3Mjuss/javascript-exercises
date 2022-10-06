// Mat.round(x * 10) / 10 --> round number to 1 decimal

const ftoc = function(temp) {
  let farenheit = ((temp - 32) * 5 / 9);
  console.log(`${temp} Celsius in Farenheit: ${farenheit}`);
  return Math.round(farenheit * 10) / 10
};

const ctof = function(temp) {
  let celsius = (temp * (9 / 5) + 32);
  console.log(`${temp} Farenheit in Celsius: ${celsius}`);
  return Math.round(celsius * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
