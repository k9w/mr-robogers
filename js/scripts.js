/* Utility Logic */

function () {
  
}


/* Business Logic */


function returnNumberRange(numberInput) {
  const array = [];
  for (let i = 0; i < numberInput; i++) {
    array.push(i);
  }
  return array; // how do I pass this value back to the calling
                // statement?
}


function () {
  if () {
    
  }
  else if {
    
  }
  else {
    
  }
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

