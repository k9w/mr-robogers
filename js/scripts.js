/* Business Logic */


function getNumberRange(inputtedNumber) {
  const array = [];
  for (let i = 0; i < inputtedNumber + 1; i++) {
    array.push(i);
  }

/* The for loop below is suppsed to check for elements in the array
 * containing 3s, 2s, or 1s, in that order of priority. But it fails
 * at the first opening if condition because 'element.includes' is not
 * a function. I don't yet know how to fix that. If you comment out
 * the entire for loop below, the numbers will display correctly on
 * the rendered webpage, just not with the word substituions requested
 * in the project prompt. I could use some help with this.
 */

  for (let element of array) {
    if (element.toString.includes("3") === true) {
      // convert number containing 3 to "Won't you be my neighbor?"
      element = "Won't you be my neighbor?";
    } else if (element.toString.includes("2") === true) {
      // convert number containing 2 to "Boop!"
      element = "Boop!";
    } else if (element.toString.includes("1") === true) {
      // convert number containing 1 to "Beep!"
      element = "Beep!";
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

