$(document).ready(function () {
  const body = $('body');
  const game = $('.tic-tac-board');
  const boxes = $('.box');
  // const X = $('<p>X</p>');
  // const O = $('<p>O</p>');
  let currentPlayer = "X";
  let turnCount = 1;

game.click(playGame);

// it needs to place the x or o, if/if else, else switch players

  function playGame (event) {

    $(event.target).append(`<p>${currentPlayer}</p>`);

    if(checkForWin() === true) {
      gameOver(currentPlayer);
    } else if(turnCount === 9) {
  gameOver(null);
  } else {
    switchPlayer();
    turnCount++;
    console.log(turnCount);
}
}

function switchPlayer() {
     if (currentPlayer === "X") {
     currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
}

function checkForWin () {
if (($('.grid1 p').text() === currentPlayer && $('.grid2 p').text() === currentPlayer && $('.grid3 p').text() === currentPlayer) ||
    ($('.grid4 p').text() === currentPlayer && $('.grid5 p').text() === currentPlayer && $('.grid6 p').text() === currentPlayer) ||
    ($('.grid7 p').text() === currentPlayer && $('.grid8 p').text() === currentPlayer && $('.grid9 p').text() === currentPlayer) ||
    ($('.grid1 p').text() === currentPlayer && $('.grid4 p').text() === currentPlayer && $('.grid7 p').text() === currentPlayer) ||
    ($('.grid2 p').text() === currentPlayer && $('.grid5 p').text() === currentPlayer && $('.grid8 p').text() === currentPlayer) ||
    ($('.grid3 p').text() === currentPlayer && $('.grid6 p').text() === currentPlayer && $('.grid9 p').text() === currentPlayer) ||
    ($('.grid3 p').text() === currentPlayer && $('.grid5 p').text() === currentPlayer && $('.grid7 p').text() === currentPlayer) ||
    ($('.grid1 p').text() === currentPlayer && $('.grid5 p').text() === currentPlayer && $('.grid9 p').text() === currentPlayer))
{
  return true;
} else {
  return false;
}
}

checkForWin();

function gameOver (winner) {
if(winner) {
  alert(`${winner} won`);
} else {
  alert('Stalemate!');
}
game.off('click', playGame);
resetGame();
turnCount = 1;
}

function resetGame() {
game.click(playGame);
boxes.html("");
}



