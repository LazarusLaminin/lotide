const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  // let longestArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  // let shortestArray = arrayOne.length < arrayTwo.length ? arrayOne : arrayTwo;
  for (let i = 0; i < arrayOne.length; i++) {
    if (!arrayTwo.includes(arrayOne[i])) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  let arrayOne = Object.keys(object1);
  let arrayTwo = Object.keys(object2);
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let parts of arrayOne) {
    if (Array.isArray(object1[parts]) && Array.isArray(object2[parts])) {
      if (!eqArrays(object1[parts], object2[parts])) {
        return false;
      }
    }
    else if (object1[parts] !== object2[parts]) {
      return false;
    }
  } return true;
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
}


const object1 = { c: "1", d: ["2", 3] };
const object2 = { d: ["2", 3], c: "1" };

console.log(assertObjectsEqual());