// Code your solution in this file!

// Define a function using a function expression
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  // Define a function using arrow syntax
  const add = (x, y) => x + y;
  
  // Example usage of the greet function
  console.log(greet("Alice"));
  
  // Example usage of the add function
  console.log(add(2, 3));
  // Define a function to return the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define a function to return the last two drivers from the passed-in array
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // Create an array called selectingDrivers that includes the above functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define a function that takes a multiplier and returns a function that multiplies a given value using the multiplier
  const createFareMultiplier = function (multiplier) {
    return function (value) {
      return value * multiplier;
    };
  };
  
  // Define a function fareDoubler that doubles fares using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Define a function fareTripler that triples fares using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Define a function selectDifferentDrivers that takes an array of drivers and a function as arguments
  const selectDifferentDrivers = function (drivers, fn) {
    return fn(drivers);
  };
  