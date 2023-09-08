// Given an array of functions [f1, f2, f3, ..., fn], return a new function 
// fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and 
// returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// Explain
// What is ReduceRight
// reduceRight is a method available on arrays in JavaScript.
// It works like the reduce method, but starts from the right-hand 
// side of the array instead of the left.
// It takes a callback function as its first argument, which takes 
// two arguments: the accumulator and the current value.
// The callback function is called once for each element in the array, in reverse order.
// Here's an example code for reduceRight to explain how it works:

const sum = arr.reduceRight((prev, curr) => {
  return prev + curr;
});


var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};


//solution 1: for loop
var compose = function(functions) {
  if (functions.length === 0) {
    return function(x) { return x; };
  }
  
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  }
};

//solution 2: forEach

const compose = function(functions) {
  functions.reverse()
	return function(x) {
    functions.forEach(function(fn){
      x = fn(x)
    })
  return x
  }
};

//solution 3: reduceRight

var compose = function(functions) {
  return x => functions.reduceRight((acc,f)=>f(acc),x)
};