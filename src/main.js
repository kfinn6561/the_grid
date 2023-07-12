
const numberOfSquares=27;
const numberOfPrizes=9;

var gridSquares=[]
var prizeSquares=[]

grid = document.getElementById("the-grid")
prizeLadder=document.getElementById("prize-ladder")

for (let i = 0; i < numberOfSquares; i++) {
    gridSquares.push(new gridSquare(i+1,grid))
  }

for (let i = 0; i < numberOfPrizes; i++) {
    prizeSquares.push(new gridSquare(i+1,prizeLadder))
}