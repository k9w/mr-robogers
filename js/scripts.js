/* Utility Logic */


/* Business Logic */


function returnNumberRange(numberInput) {
  const array = [];
  for (let i = 0; i < numberInput; i++) {
    array.push(i);
  }
  return array; // how do I pass this value back to the calling
                // statement?
}


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

