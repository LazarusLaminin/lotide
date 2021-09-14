const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let randomArray = [1, 2, 3, 4, 5];
let secondArray = ["Light", "House", "Labs"]
const head = function (array) {
  return array[0];
}
console.log(head(randomArray));
console.log(head(secondArray));

assertEqual(head(randomArray), 1);
assertEqual(head(randomArray), 5);
assertEqual(head(secondArray), "Light");
assertEqual(head(secondArray), "House");
