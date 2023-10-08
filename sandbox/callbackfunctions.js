function calculate(a, b, callback) {
    callback(a + b);
}
  
function displayResult(result) {
    console.log('The result is: ' + result);
}

const sum = calculate(2,3,displayResult);
console.log(sum);