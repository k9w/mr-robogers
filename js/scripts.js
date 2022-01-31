/* Utility Logic */


/* Business Logic */


function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
  }
  convertNumbersContaining1s2s3sToStringOfWords(array);
  return array;
}

/*

pseudocode

for each element in the array

convert it from number to string and save it in a new array of strings
(leave the original array unmodified)

check if string contains 1, 2, or 3.

if it contains a 1, change the whole string from the number to:
"Beep!"

if it contains a 2, change the whole string from the number to:
"Boop!"

if it contains a 3, change the whole string from the number to:
"Won't you be my neighbor?"

function convertNumbersContaining1s2s3sToStringOfWords(array) {
  
}

function doesNumberContain1s2s3s(array) {
  let string = element.toString();
  string.includes(word)
}

*/



/* User Interface Logic */

$(document).ready(function() {
    $("form#enterANumber").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let numberRange = getNumberRange(parseInt($("#numberInput").val()));
    numberRange.forEach(element => console.log(element));
    $("#result").show();
    $("#result").append(numberRange.join(", "));
  });
});

