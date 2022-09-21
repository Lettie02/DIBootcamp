function playTheGame() {
  if (confirm("would you like to play?")) {
    let selector = prompt("guess an number between 0 and 10");
    while (isNaN(selector) || selector < 0 || selector >= 10) {
      selector = prompt(
        "that is not a number or it is not between 1 and 10, guess an number between 0 and 10"
      );
    }
    if (selector > 0 && selector <= 10) {
      let computerNumber = Math.floor(Math.random() * 11);
      compareNumbers(selector, computerNumber);
    }
  }
}
function compareNumbers(selector, computerNumber) {
  for (i = 0; i < 3; i++) {
    if (selector > computerNumber) {
      if (i < 2) {
        alert("Your number is bigger than the computers, guess again");
        selector = prompt("guess again");
      } else if ((i = 3)) {
        alert("you lose");
      }
    } else if (selector < computerNumber) {
      if (i < 2) {
        alert("Your number is smaller than the computers, guess again");
        selector = prompt("guess again");
      } else if ((i = 3)) {
        alert("you lose");
      }
    } else if (isNaN(selector) || selector < 0 || selector >= 10) {
      selector = prompt(
        "that is not a number or it is not between 1 and 10, guess an number between 0 and 10"
      );
    } else if ((computerNumber = selector)) {
      alert("winner!");
      i = 3;
    }
  }
}
