function roundOne(){
    setupRoundOne();

    columnsToChoose = [...Array(numberOfColumns).keys()]
    
    for (let i=0; i<numberOfColumns; i++){
        columnsToChoose.forEach( j =>{
            for (let k=0; k<3; k++){
                gridSquares[j+k*numberOfColumns].addClickEvent(()=>{
                    roundOneChoose(j)
                })
            }
        })
    }

}

function formatCurrency(amount){
    return "\u00A3" + amount.toLocaleString();
}

function setupRoundOne(){
    prizeLadder.style.display="none";

    for (let i=0; i<numberOfColumns; i++){
        gridSquares[i].setText(formatCurrency(topRowPrizes[i]))
        gridSquares[i].setColour("#3293a8")

        gridSquares[i+numberOfColumns].setText("OR")
        gridSquares[i+numberOfColumns].setColour("white")

        gridSquares[i+2*numberOfColumns].setText(formatCurrency(bottomRowPrizes[i]))
        gridSquares[i+2*numberOfColumns].setColour("#edca2f")
    }
}

function roundOneChoose(i){
    for (let k=0; k<3; k++){
        gridSquares[i+k*numberOfColumns].setColour("green");
    }
}