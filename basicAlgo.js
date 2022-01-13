/**
 * basicAlgo.js
 * Exercises from the Basic Algoritm Scripting of FreeCodeCamp
 * @author Ulysse Valdenaire
 * 13/01/2022
 */


/**
 * convertTemp()
 * convert celcius to fahrenheit
 * or convert fahrenheit to celcius
 * @param  {string} temp farenheit or celcius
 * @param  {number} value
 * @return {number} tempRreturn 
 */
function convertTemp(temp, value) {
    let tempReturn;
    if (temp === "celcius") {
        tempReturn = (value * (9 / 5)) + 32;
    } else if (temp === "fahrenheit") {
        tempReturn = (value - 32) * 5 / 9;
    }
    return tempReturn;
}

// console.log(convertTemp("celcius", -30));


/**
 * reverseString()
 * reverse the string and return the new one
 * @param  {string} str string to be reversed
 * @return {string} reversetr
 */
function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}

//console.log(reverseString("Greetings from Earth"));


/**
 * factorialize
 * return the factorial of the num argument
 * @param  {number} num 
 * @return {number} num -> factorial of num
 */
function factorialize(num) {
    if (typeof num !== "number") {
        return "Error, please enter a number";
    } else if (num < 0) {
        num = num * -1;
    }

    if (num === 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

//   console.log(factorialize());


/**
 * findLongestWordLength
 * find the longest word length in a string
 * @param  {string} str
 * @return {string } longestWordLength
 */
function findLongestWordLength(str) {
    if (typeof str !== "string") {
        return "Error, please enter a string";
    }

    str = str.split(" ");
    let longestWordLength = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            if (str[i].length > longestWordLength) {
                longestWordLength = str[i].length;
            }
        }
    }
    return longestWordLength;
}

//   console.log(findLongestWordLength("Error, please enter a string"));


/**
 * findGreaterNumber
 * find the greater number in an array
 * @param  {array} arr
 * @return {number} greaterNumber
 */
function findGreaterNumber(arr) {
    let greaterNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greaterNumber) {
            greaterNumber = arr[i];
        }
    }
    return greaterNumber;
}

// console.log(findGreaterNumber([4, 5, 1, 3]));


numbers = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
let greaterNumbers = [];
numbers.forEach(element => {
    greaterNumbers.push(findGreaterNumber(element));
});

// console.log(greaterNumbers);


/**
 * confirm ending
 * confirm if a string ends with a given target
 * @param  {string} str
 * @param  {string} target
 * @return {boolean}
 */
function confirmEnding(str, target) {
    let lengthEndig = str.length - target.length;
    if (str.substring(lengthEndig) === target) {
        return true;
    } else {
        return false;
    }
}

//   console.log(confirmEnding("Abstraction", "action"));


/**
 * repeatStringNumTimes
 * repeat a string num times
 * @param  {string} str
 * @param  {number} num
 */
function repeatStringNumTimes(str, num) {

    if (typeof str !== "string" || typeof num !== "number") {
        return "str must be a string and num must be a number !";
    }

    let newStr = "";
    if (num < 1) {
        return newStr;
    } else {
        for (let i = 0; i <= num; i++) {
            console.log(newStr);
            newStr = newStr + str;
        }
    }
    return str;
}

//   console.log(repeatStringNumTimes(4, "f"));


/**
 * truncateString
 * @param  {string} str
 * @param  {number} num
 * @return {number} num
 */
function truncateString(str, num) {
    if (str.length > num) {
        str = str.substring(0, num) + "...";
    }
    return str;
}

//  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));


/**
 * findElement
 * find the first element in a array which returns true when it goes into the function func
 * @param  {array} arr
 * @param  {function} func
 * @return {string} num
 */
function findElement(arr, func) {

    let num;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            num = arr[i]
            return num;
        }
    }
    return num;
}

//   console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));


/**
 * booWho
 * returns true if the bool variable is a boolean primitive
 * @param  {mixed} bool
 * @return {boolean}
 */
function booWho(bool) {

    if (typeof bool == "boolean") {
        return true;
    } else {
        return false;
    }
}

// booWho(null);


/**
 * titleCase
 * return a string with all the first letters of each words in upperCase
 * @param  {string} str
 * @return {string} str
 */
function titleCase(str) {
    let finalStr = "";
    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
        let word = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        finalStr = finalStr + word + " ";
        return str;
    }
}

// titleCase("I'm a little tea pot");


/**
 * frankenSplice
 * copy all elemants of arr1 into arr2 at index n
 * @param  {array} arr1
 * @param  {array} arr2
 * @param  {number} n
 * @return {array} arr2
 */
function frankenSplice(arr1, arr2, n) {

    for (let i = 0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1[i]);
        n += 1;
    }
    return arr2;
}

//   frankenSplice([1, 2], ["a", "b"], 1);


/**
 * bouncer
 * remove all elements false from the array arr
 * @param  {array} arr
 * @return {array} arr
 */
function bouncer(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === false) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    return arr;
}

// console.log(bouncer([7, "ate", "", false, 9]));


/**
 * getIndexToIns
 * returns the index where the num has to be inserted in the arr (by ascending order)
 * @param  {array} arr
 * @param  {number} num
 * @return {number} 
 */
function getIndexToIns(arr, num) {

    arr = arr.sort(CompareForSort);
    if (num > arr[arr.length - 1]) {
        return arr.length;
    }
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            return i;
        } else if (num === arr[i]) {
            return i;
        }
    }
}



/**
 * compareForSort
 * compare two numbers
 * @param  {number} first
 * @param  {number} second
 * @return {number}
 */
function CompareForSort(first, second) {
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
}

// console.log(getIndexToIns([], 1));


/**
 * mutation
 * return true if all the elements in arr[1] are presents in arr[2] 
 * @param  {array} arr
 * @return {boolean}
 */
function mutation(arr) {
    let arr1 = arr[0].toLowerCase();
    let arr2 = arr[1].toLowerCase();
    let result = true;

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            console.log(arr2[i]);
            result = false;
        }
    }
    return result;
}

// console.log(mutation(["hello", "neo"]));


/**
 * chunkArrayInGroups
 * slice arr into several arrays of length size and returns them in newArray
 * @param  {array} arr
 * @param  {number} size
 * @return {array} newArray
 */
function chunkArrayInGroups(arr, size) {

    let newArray = [];
    for (let i = 0; i < arr.length; i += size) {
        let littleArr = arr.slice(i, i + size);
        newArray.push(littleArr);
    }
    return newArray;
}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));