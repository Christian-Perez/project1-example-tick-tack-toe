
var tiles = document.getElementsByClassName('tile');
var currentPlayer = 'X';
var clicked;
var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var winner = '';
function checkWin(){
  for(var i = 0 ; i < winningCombos.length; i++){
    var currentArray = winningCombos[i];
    var a = document.getElementById('cell'+currentArray[0].innerHTML);
    var b = document.getElementById('cell'+currentArray[1].innerHTML);
    var c = document.getElementById('cell'+currentArray[2].innerHTML);
    if(a == b && a == c && a != ''){
      winner = a;
    }
  }
}
// var color = 1;
// console.log(tiles);
for(var i = 0; i < tiles.length; i++){
  tiles[i].addEventListener('click', function(){

  if(this.innerHTML == ''){
    this.innerHTML = currentPlayer;
    switchPlayer();
    checkWin();
  }else{
    alert('Tile already selected, try selecting another');
  }

  });
}
function switchPlayer(){
  if(currentPlayer == 'X'){
    currentPlayer = 'O'
  }else{
    currentPlayer = 'X';
  }
}
// tiles.forEach(console.log('test')); // not working
