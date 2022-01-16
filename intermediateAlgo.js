/**
 * intermediateAlgo.js
 * Exercises from the Intermediate Algoritm Scripting of FreeCodeCamp
 * @author Ulysse Valdenaire
 * 16/01/2022
 */

/**
 * sumAll
 * returns the sum between the two numbers in arr[]
 * @param  {aray} arr
 * @return {number} result
 */
function sumAll(arr) {
  let result = 0;
  let lowestNum;
  let largestNum;

  if (arr[0] < arr[1]) {
    lowestNum = arr[0];
    largestNum = arr[1];
  } else {
    lowestNum = arr[1];
    largestNum = arr[0];
  }

  for (let i = lowestNum; i <= largestNum; i++) {
    result += i;
  }
  return result;
}

// console.log(sumAll([10, 5]));


/**
 * difArray
 * @param  {array} arr1
 * @param  {array} arr2
 * @return {array} newArr
 */
function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));


/**
 * destroyer
 * @param  {arry} arr
 * @return {array} arr
 */
function destroyer(arr) {
  for (let i = 0; i < arguments[0].length; i++) {
    for (let j = 1; j <= arguments.length - 1; j++) {
      if (arguments[0].indexOf(arguments[j]) !== -1) {
        let index = arguments[0].indexOf(arguments[j]);
        arguments[0].splice(index, 1);
        i = 0;
      }
    }
  }
  return arr;
}

// console.log(destroyer([2, 3, 2, 3], 2, 3));

/**
 * @param  {array} collection
 * @param  {object} source
 * @return {array}
 */
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);

  return collection.filter(function (obj) {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);