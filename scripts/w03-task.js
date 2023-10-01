/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (number1,number2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers (number1,number2){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = ((number1,number2) => number1 * number2);

const multiplyNumbers = (number1,number2) => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = ((number1,number2) => number1 / number2);

const divideNumbers = (number1,number2) => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const date = new Date();
let currentYear;
currentYear = date.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const firstArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = firstArray;

/* Output Odds Only Array */
const oddsArray = firstArray.filter(number => number % 2 !== 0);
 
document.getElementById('odds').textContent = oddsArray;

/* Output Evens Only Array */
const evensArray = firstArray.filter(number => number % 2 === 0);

document.getElementById('evens').textContent = evensArray;

/* Output Sum of Org. Array */
const sumArray = firstArray.reduce((sum, number) => sum + number);

document.getElementById('sumOfArray').textContent = sumArray;

/* Output Multiplied by 2 Array */
const bytwoArray = firstArray.map((number) => number * 2);
document.getElementById('multiplied').textContent = bytwoArray;

/* Output Sum of Multiplied by 2 Array */
const sumbytwo = bytwoArray.reduce((sum,number) => sum + number);
document.getElementById('sumOfMultiplied').textContent = sumbytwo;
