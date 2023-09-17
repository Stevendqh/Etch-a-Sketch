const gridContainer = document.getElementById("grid-container");

const numRows    = 6
const numColumns = 6

for (let i = 0; i < numRows; i++ ) {
    for (let j = 0; j < numColumns; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.append(gridSquare);
    }
}
