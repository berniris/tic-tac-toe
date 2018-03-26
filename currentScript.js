$(document).ready(function() {
const body = $('body');
const game = $('.tic-tac-board');
//let x = $('<p>X</p>').addClass('x');
//let o = $('<p>O</p>').addClass("o");
const box = $('.box');
let player;
let computer;


function whoPlaysFirst () {
  const randomNumComp = Math.floor(Math.random() * 20);
  const randomNumPlayer = Math.floor(Math.random() *20);
   console.log(randomNumComp);
   console.log(randomNumPlayer);

  if (randomNumComp < randomNumPlayer) {
    // player = o;
    // computer = x;
    // console.log('Player1 is' + player);
    alert("You are" + " " + "X" + " " + " and get first move. Please click on a box on the grid.");
    playGame();
  } else {
    // computer = o;
    // player = x;
    // // console.log('Computer is' + computer);
    alert ("Computer gets first move.");
    computerMove();
  }
}

whoPlaysFirst();

function computerMove() {
  // console.log(firstTurn);
  alert(`Computer has gone. You're turn now. Click on a grid box`);
  const firstTurn = Math.floor(Math.random() * 8);
    $('.box').eq(firstTurn).append('<p>O</p>').addClass('p');
}

computerMove();

function playGame () {
  let counter;
  alert(`You're turn again. Please select a box`);
  $(box).on('click', function () {
    $(this).append('<p>X</p>').addClass('p');
    console.log($(this));
  });
};
  //playGame();
});
