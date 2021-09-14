const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let randomArray = [1, 2, 3, 4, 5];
let secondArray = ["Light", "House", "Labs"];
const tail = function (array) {
  return array.slice(1);
};

console.log(tail(randomArray));
console.log(tail(secondArray));

const result = tail(secondArray);
assertEqual(result.length, 2);
assertEqual(result[0], "Light");
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);