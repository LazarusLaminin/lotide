const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length && i < arrayTwo.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      return true;
    } else {
      return false;
    }
  }
}

// const eqArrays = function (arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false