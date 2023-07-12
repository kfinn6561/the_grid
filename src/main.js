
const numberOfColumns = 9;

const numberOfSquares=3 * numberOfColumns;
const numberOfPrizes=numberOfColumns;

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

roundOne();