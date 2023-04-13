function add() {
  //get the numbers
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  //turn them into integers
  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  //add the first and second numbers
  let sum = numberOne + numberTwo;

  //display the result
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = sum;
}

function subtract() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let difference = numberOne - numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = difference;
}

function multiply() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let product = numberOne * numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = product;
}

function divide() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let quotient = numberOne / numberTwo;

  if (numberTwo == 0) {
    quotient = "Cannot divide by zero!";
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = quotient;
}

function sumAll() {
  let numberString = document.getElementById("numberSeries").value;
  //numberString = '12345'

  let numberArray = numberString.split("");
  //numberArray = ['1', '2', '3', '3', '4', '5']

  let sum = 0; //running total

  for (let i = 0; i < numberArray.length; i++) {
    let currentNumber = numberArray[i];
    //currentNumber = '1'

    currentNumber = parseInt(currentNumber);
    //currentNumber = 1

    sum = sum + currentNumber;
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function multiplyAll() {
  let numberString = document.getElementById("numberSeries").value;

  let numberArray = numberString.split("");

  let product = 1; 

  for (let i = 0; i < numberArray.length; i++) {
    let currentNumber = numberArray[i];

    currentNumber = parseInt(currentNumber);

    product = product * currentNumber;
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = product;
}

function minimum() {
      let numberString = document.getElementById("numberSeries").value;

      let stringArray = numberString.split("");

      let min = parseInt(stringArray[0]);

      for (let i = 1; i < stringArray.length; i++) {
        let stringNumber = stringArray[i];
        let number = parseInt(stringNumber);

        if (number < min) {
          min = number;
        }

      }

      let resultsDiv = document.getElementById("results");
      resultsDiv.innerText = min;
}

function maximum() {
  let numberString = document.getElementById("numberSeries").value;

  let stringArray = numberString.split("");

  let max = parseInt(stringArray[0]);

  for (let i = 1; i < stringArray.length; i++) {
    let stringNumber = stringArray[i];
    let number = parseInt(stringNumber);

    if (number > max) {
      max = number;
    }
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = max;
}

function average() {
  let numberString = document.getElementById("numberSeries").value;

  let numberArray = numberString.split("");

  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    let currentNumber = numberArray[i];

    currentNumber = parseInt(currentNumber);

    sum = sum + currentNumber
  }

  let avg = sum / numberArray.length

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = avg;
}
