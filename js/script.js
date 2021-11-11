function reverseThisString(string){
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value;
    const resultElement = document.getElementById('result');
    if(!inputValue){
        resultElement.innerHTML = 'no string entered, try again';
        return;
    }
    const reverseValue = inputValue.split("").reverse().join("");
    resultElement.innerHTML = 'the reversed string is, ' + reverseValue;
}
function swapCase(string){
    const caseInputElement = document.getElementById('caseinput');
    const caseInputValue = caseInputElement.value;
    const caseResultElement = document.getElementById('caseresult');
    if(!caseInputValue){
        caseResultElement.innerHTML = 'no string entered, try again';
        return;
    }
    var i = 0;
    var caseArr= [];
    while( i < caseInputValue.length){
        swapCaseValue = caseInputValue.charAt(i);
        if (swapCaseValue == swapCaseValue.toUpperCase()){
            swapCaseValue = swapCaseValue.toLowerCase();
            caseArr += swapCaseValue;
        }
        else{
            swapCaseValue = swapCaseValue.toUpperCase();
            caseArr += swapCaseValue;
        }
        i++;
    }
    caseResultElement.innerHTML = 'the swapped case string is, ' + caseArr;
}


function toCelcius(array){
    farenheitValue = document.getElementById('tempinput').value.split(",");
    const farenheitResultElement = document.getElementById('tempresult');
    if(!farenheitValue){
        farenheitResultElement.innerHTML = 'no temperature entered, try again';
        return;
    }
  const celciusValue = farenheitValue.map(x => (x-32)*.5556);
   farenheitResultElement.innerHTML = farenheitValue + ' To Celcius is, ' + celciusValue;
// should add convert to integers
}

function funct(array){
    if (array <= 75)
    {return 'Fail';}
    else return 'Pass';
}
function passOrFail(array){
    passValue = document.getElementById('passinput').value.split(",");
    const passResultElement = document.getElementById('passresult');
    if(!passValue){
        passResultElement.innerHTML = 'no grades entered, try again';
        return;
    }
    const passorFailValue = passValue.map(funct);
   passResultElement.innerHTML = passorFailValue;
}
//output to console


function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const germanArray = [];
    cardinalNumbers.forEach((x, i) => 
    {
        const gNum = germanNumbers[i];
    germanArray.push(x + " is " + gNum);
    });
    console.log(germanArray);
}

//output to console
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeNumbers = numbers.filter((num) => 
    {
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      });
      console.log(primeNumbers);
}

function consoleLogging(){
for(var i = 1 ; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
    } else if (i % 3 === 0) {
        console.log("CSC225 RULES");
    } else if (i % 5 === 0) {
        console.log("I LOVE JAVASCRIPT");
    } else {
        console.log(i);
    }
}
}

function documentReady(){
const buttonElement = document.getElementById('button');
const caseButtonElement = document.getElementById('casebutton');
const tempButtonElement = document.getElementById('tempbutton');
const passButtonElement = document.getElementById('passbutton');
buttonElement.addEventListener("click", reverseThisString);caseButtonElement.addEventListener("click", swapCase);
tempButtonElement.addEventListener("click", toCelcius);
passButtonElement.addEventListener("click", passOrFail);
germanNumbers();
returnPrimeNumbers();
consoleLogging();
}

document.addEventListener("DOMContentLoaded", documentReady);
germanNumbers;