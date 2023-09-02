// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".



// Solution 1. Using function declaration
var createHelloWorld = function() {
  return function(...args) {
      return 'Hello World'
  }
};

// Solution 2. Using arrow function
const createHelloWorld = function() {
  return () => "Hello World";
};

// Solution 3. Using an arrow function with implicit return:
const createHelloWorld = () => () => "Hello World";

// Solution 4. Using closure
function createHelloWorld() {
  const greeting = "Hello World";
  
  return function() {
    return greeting;
  };
}

