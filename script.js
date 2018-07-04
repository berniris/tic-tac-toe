$(document).ready(function () {
  const body = $('body');
  const game = $('.tic-tac-board');
  const boxes = $('.box');
  let currentPlayer = Math.floor(Math.random() *2) ===0 ? 'ramen' : 'sushi';
  let turnCount = 0;

game.click(playGame);

// it needs to place the x(sushi peice) or o(ramen peice) and check for a winner on each turn 

  function playGame (event) {

  console.log($(event.target));
    if ($(event.target).hasClass('sushi') || $(event.target).hasClass('ramen')) {
   alert('Move taken, please choose another square.');
  } else {
  $(event.target).addClass(currentPlayer);
    console.log($(event.target))
    turnCount++;
}
    if(checkForWin() === true) {
    gameOver(currentPlayer);
    } else if(turnCount === 9) {
    gameOver(null);
  } else {
    switchPlayer();
    console.log(turnCount);
}
}

// switch turns from player 1 to player 2 
function switchPlayer() {
     if (currentPlayer === 'ramen') {
     currentPlayer = 'sushi';
    } else {
      currentPlayer = 'ramen';
    }
}

function checkForWin () {
if (($('.grid1').hasClass(currentPlayer) && $('.grid2').hasClass(currentPlayer) && $('.grid3').hasClass(currentPlayer))  ||
    ($('.grid4').hasClass(currentPlayer) && $('.grid5').hasClass(currentPlayer) && $('.grid6').hasClass(currentPlayer))  ||
    ($('.grid7').hasClass(currentPlayer) && $('.grid8').hasClass(currentPlayer) && $('.grid9').hasClass(currentPlayer))  ||
    ($('.grid1').hasClass(currentPlayer) && $('.grid4').hasClass(currentPlayer) && $('.grid7').hasClass(currentPlayer))  ||
    ($('.grid2').hasClass(currentPlayer) && $('.grid5').hasClass(currentPlayer) && $('.grid8').hasClass(currentPlayer))  ||
    ($('.grid3').hasClass(currentPlayer) && $('.grid6').hasClass(currentPlayer) && $('.grid9').hasClass(currentPlayer))  ||
    ($('.grid3').hasClass(currentPlayer) && $('.grid5').hasClass(currentPlayer) && $('.grid7').hasClass(currentPlayer))  ||
    ($('.grid1').hasClass(currentPlayer) && $('.grid5').hasClass(currentPlayer) && $('.grid9').hasClass(currentPlayer)))
{
  return true;
} else {
  return false;
}
}

checkForWin();

function gameOver (winner) {
if(winner === 'ramen') {
  alert(`Player 1 won`);
} else if (winner === 'sushi') {
 alert('Player 2 won');
} else { 
  alert('Stalemate!')
}
game.off('click', playGame);
resetGame();
turnCount = 1;
}


function resetGame() {
game.click(playGame);
boxes.removeClass('sushi');
boxes.removeClass('ramen');
}
});


