/**
 * basicAlgo.js
 * Exercises from the Basic Algoritm  Scripting of FreeCodeCamp
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
function convertTemp(temp, value)
{
    let tempReturn;
    if(temp === "celcius")
    {
        tempReturn = (value * (9/5)) + 32;
    }
    else if(temp === "fahrenheit")
    {
        tempReturn = (value - 32) * 5/9;
    }
    return tempReturn;
}

// console.log(convertTemp("celcius", -30));
// console.log(convertTemp("fahrenheit", 14));

/**
 * reverseString()
 * reverse the string and return the new 
 * @param  {string} str string to be reversed
 * @return {string} reversetr
 */
function reverseString(str) {

    let reverseStr="";
    for(let i=str.length-1; i>=0; i--)
    {
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
       if(typeof num !== "number")
       {
           return "Error, please enter a number";
       }
       else if(num < 0)
       {
           num = num * -1;
       }
       
       if(num === 1)
       {
           return 1;
       }
       else
       {
           return num * factorialize(num - 1);
       }
  }
  
//   console.log(factorialize());

/**
 * findLongestWordLength
 * find the longest word length in a string
 * @param  {string} str
 * @return {string } longestWordLenfht
 */
function findLongestWordLength(str) {

    if(typeof str !== "string")
    {
        return "Error, please enter a string";
    }

    str = str.split(" ");
    let longestWordLength = 0;

    for(let i=0; i<str.length;i++)
    {
        for(let j=0; j<str[i].length; j++)
        {
            if(str[i].length > longestWordLength)
            {
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
function findGreaterNumber(arr)
{
    let greaterNumber = arr[0];

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]> greaterNumber)
        {
            greaterNumber = arr[i];
        }
    }
    return greaterNumber;
}

// console.log(findGreaterNumber([4, 5, 1, 3]));

// numbers =[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

// let greaterNumbers = [];
// numbers.forEach(element => {
//     greaterNumbers.push(findGreaterNumber(element));
// });

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

    if(str.substring(lengthEndig) === target)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  
  console.log(confirmEnding("Abstraction", "action"));