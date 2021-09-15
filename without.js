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
}

// implement without
// take in source array and itemsToRemove array
// return new array with only elements from source not present in itemsToRemove

// empty array
// loop to iterate through source array
// nested loop to iterate through the itemstoremove array
// if itemstoremove !== source, push into new array
// return new array



const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let entries in source) {
    if (!itemsToRemove.includes(source[entries])) {
      newArr.push(source[entries]);
    }
  }
  return newArr;
}

const actual = without([1, 2, 3], [2]);
const expected = [2, 3];

assertEqArrays(actual, expected);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqArrays(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

