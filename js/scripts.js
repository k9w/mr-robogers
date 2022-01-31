/* Utility Logic */


/* Business Logic */


function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
  }
  return array;
}




/* User Interface Logic */

$(document).ready(function() {
  $("form#enterANumber").submit(function(event) {
    event.preventDefault();
    console.log(parseInt($("#numberInput").val()));
    let numberRange = getNumberRange(parseInt($("#numberInput").val()));
    console.log(numberRange);  
    $("#result").show();
    $("#result").append(numberRange);
  });
});

