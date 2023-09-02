// Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

//Solution 1:
var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};

//Solution 2: Clean and simple
const expect = (val) => {
  const throwError = (errorStr) => {
    throw new Error(errorStr);
  };

  return {
    toBe: (val2) => val2 === val || throwError("Not Equal"),
    notToBe: (val2) => val2 !== val || throwError("Equal"),
  };
};


//Solution 3: Hard to read
var expect = function(val) {
  const param = val
  return {
      toBe: (value) => (value===param)? true: (() => { throw new Error("Not Equal"); })(),
      notToBe: (value) => (value!==param)? true: (() => { throw new Error("Equal"); })(),
  }
};