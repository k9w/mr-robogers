/* Business Logic */

function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
    let element = array[i];
    if (element.toString().includes("3") === true) {
      array[i] = "Won't you be my neighbor?";
    } else if (element.toString().includes("2") === true) {
      array[i] = "Boop!";
    } else if (element.toString().includes("1") === true) {
      array[i] = "Beep!";
    }
  }
  return array.join(", ");
}


/* User Interface Logic */

$(document).ready(function() {
    $("form#enterANumber").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    $("#result").show();
    $("#result").append(getNumberRange(parseInt($("#numberInput").val())));
  });
});
