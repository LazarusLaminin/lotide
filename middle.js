const assertEqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
    return;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
}

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// want to return middle element of array
// must loop through array to check which value is in the middle
// if only one or two elements in array, return empty array
// if odd number array, return middle element
// if even number array, return two middle elements


let evenArray = [1, 2, 3, 4, 5, 6];
let array = [1, 2, 3, 4, 5];
let lowArray = [1, 2];

const middle = function (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return newArr;
    } else if (array.length % 2 !== 0) {
      newArr.push(array[Math.floor(array.length / 2)]);
      return newArr;
    } else if (array.length % 2 === 0) {
      newArr.push(array[(array.length / 2) - 1]);
      newArr.push(array[array.length / 2]);
      return newArr;
    }
  }
};

assertEqArrays(middle(evenArray), [3, 4]);
assertEqArrays(middle(array), [5]);