/* Business Logic */


function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
  }
  for (const element of array) {
    if (element.includes(3) === true) {
      // convert number containing 3 to "Won't you be my neighbor?"
      element.toString("Won't you be my neighbor?");
      console.log(element);
    } else if (element.includes(2) === true) {
      // convert number containing 2 to "Boop!"
      element.toString("Boop!");
      console.log(element);
    } else if (element.includes(1) === true) {
      // convert number containing 1 to "Beep!"
      element.toString("Beep!");
      console.log(element);
    } else {
      console.log("This is a " + array[i]);
    }
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

