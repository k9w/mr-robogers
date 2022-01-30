/* Utility Logic */


/* Business Logic */


function getNumberRange(numberInput) {
  const array = [];
  for (let i = 0; i < numberInput + 1; i++) {
    array.push(i);
  }
  return array;
}

console.log(getNumberRange(7));


/* User Interface Logic */

$(document).ready(function() {
  $("form#enterANumber").submit(function(event) {
    event.preventDefault();
    const numberRangeArray = [];
    const numberInput = parseInt($("#numberInputField").val());
    returnNumberRange(numberInput);
    $("#output").text(numberRangeArray)
  });
});

