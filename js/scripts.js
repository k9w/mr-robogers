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
    $("#result").empty();
    let numberRange = getNumberRange(parseInt($("#numberInput").val()));
    numberRange.forEach(element => console.log(element));
    $("#result").show();
    $("#result").append(numberRange.join(", "));
  });
});

