/* Business Logic */

function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
    let element = array[i];
    if (element.toString().includes("3") === true) {
      element = "Won't you be my neighbor?";
    } else if (element.toString().includes("2") === true) {
      element = "Boop!";
    } else if (element.toString().includes("1") === true) {
      element = "Beep!";
    }
  }
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
