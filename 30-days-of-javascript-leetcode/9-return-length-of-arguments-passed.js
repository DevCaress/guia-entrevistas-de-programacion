// Write a function argumentsLength that returns the count of arguments passed to it.
// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.



//solution 1: arrow function
const argumentsLength = (...args) => args.length

//solution 2: function declaration

const argumentsLength = function(...args){
  return args.length
} 