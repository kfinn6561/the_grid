function roundOne(){
    prizeLadder.style.display="none";
    setupRoundOne();
}

function formatCurrency(amount){
    return "\u00A3" + amount.toLocaleString();
}

function setupRoundOne(){
    for (let i=0; i<9; i++){
        gridSquares[i].setText(formatCurrency(topRowPrizes[i]))
        gridSquares[i].setColour("#3293a8")

        gridSquares[i+9].setText("OR")
        gridSquares[i+9].setColour("white")

        gridSquares[i+18].setText(formatCurrency(bottomRowPrizes[i]))
        gridSquares[i+18].setColour("#edca2f")
    }
}