// Global variables
var dicesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
var p1Score = 0;
var p2Score = 0;

// get random element
function getRandom() {
  return Math.floor(Math.random() * 6);
}

// Set buton click
document.getElementById('playGame').addEventListener('click', buttonClicked);

// Button click action
function buttonClicked() {
  if (p1Score < 10 && p2Score < 10) {
    let player1Dice = getRandom()
    let player2Dice = getRandom()
    // Setting images here
    document.getElementById('dice1').src = "images/" + dicesArray[player1Dice]
    document.getElementById('dice2').src = "images/" + dicesArray[player2Dice]

    if (player1Dice > player2Dice) {
      p1Score += 1
      setText('p1', p1Score)
    } else {
      p2Score += 1
      setText('p2', p2Score)
    }
  } else {
    setText('winner', p1Score > p2Score ? 'Player 1 has won' : 'Player 2 has won')
  }

  // set text
  function setText(id, text) {
    document.getElementById(id).textContent = text
  }
}
