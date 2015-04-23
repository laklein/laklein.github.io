$( document ).ready(function() {
//for testing
console.log('loaded!')


//variables for tracking play
//cells stores an array of all the 'td' elements
var turn = 'X';
var counter = 0;
var cells = document.getElementsByTagName('td');

//create arrays of all possible wins
var row1 = [cells[0], cells[1], cells[2]];
var row2 = [cells[3], cells[4], cells[5]];
var row3 = [cells[6], cells[7], cells[8]];

var col1 = [cells[0], cells[3], cells[6]];
var col2 = [cells[1], cells[4], cells[7]];
var col3 = [cells[2], cells[5], cells[8]];

var cross1 = [cells[0], cells[4], cells[8]];
var cross2 = [cells[2], cells[4], cells[6]];

//recieves a single 'td' element and returns it's innerHTML value
var getInner = function(cell) {
  return cell.innerHTML;
};

//recieves an array of three 'td' elements and returns true
//if all elements contain the same innerHTML value
var allSame = function(array) {
  return (getInner(array[0]) === getInner(array[1]) && getInner(array[0]) === getInner(array[2]))
};

//an empty array to hold the winning 'td' elements
var winCells = [];

//recieves an array of the winning 'td' elements,
//sets their background color to red,
//and returns a string announcing which player won
var setRed = function(winCells){
  if (winCells.length !== 0){
    for(var i = 0; i < winCells.length; i++){
      winCells[i].className="winner";
    }
    var player = getInner(winCells[0]);
    return 'Player ' + player + ' Wins!'
  }
  return false;
};

//checks all the winning combinations
var check4Winner = function(){
  for(var i = 0; i < cells.length; i++){
    if (cells[i].innerHTML !== '&nbsp;'){
      if (row1.indexOf(cells[i]) > -1 && allSame(row1)) {
        winCells.push(row1[0], row1[1], row1[2]);
      }
      if (row2.indexOf(cells[i]) > -1 && allSame(row2)) {
        winCells.push(row2[0], row2[1], row2[2]);
      }
      if (row3.indexOf(cells[i]) > -1 && allSame(row3)) {
        winCells.push(row3[0], row3[1], row3[2]);
      }
      if (col1.indexOf(cells[i]) > -1 && allSame(col1)) {
        winCells.push(col1[0], col1[1], col1[2]);
      }
      if (col2.indexOf(cells[i]) > -1 && allSame(col2)) {
        winCells.push(col2[0], col2[1], col2[2]);
      }
      if (col3.indexOf(cells[i]) > -1 && allSame(col3)) {
        winCells.push(col3[0], col3[1], col3[2]);
      }
      if (cross1.indexOf(cells[i]) > -1 && allSame(cross1)) {
        winCells.push(cross1[0], cross1[1], cross1[2]);
      }
      if (cross2.indexOf(cells[i]) > -1 && allSame(cross2)) {
        winCells.push(cross2[0], cross2[1], cross2[2]);
      }
    }

  }

}

//gets called each time a cell is clicked
//calls other functions that run the game
var cellClicked = function(){
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (turn === 'X') {
      this.innerHTML = turn;
      turn = 'O';
    } else {
      this.innerHTML = turn;
      turn = 'X';
    }
    counter ++
    check4Winner();
    winner = setRed(winCells);
    if (winner) {
      alert(winner);
      location.reload();
      return false;
    } else if (counter === 9) {
      alert("It's a Draw.")
      location.reload();
      return false;
    }
  }
}


//attaches the cellClicked function to each 'td' element
for(var i = 0; i < cells.length; i++){
  cells[i].onclick = cellClicked;
}

});
