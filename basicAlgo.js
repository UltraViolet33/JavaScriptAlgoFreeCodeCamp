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