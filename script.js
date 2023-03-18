const container = document.querySelector(".container");

// Creates 16 x 16 grids when page loaded. And creates grid up to
// 100 x 100 when asked.

function gridCreator(gridSide = 16) {
    
    for (let i = 0; i < (gridSide * gridSide); i++) {
        let cellSide = Math.round(500/gridSide - 3); //500 is length of the container div.
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("style", `width: ${cellSide}px; height: ${cellSide}px;`);
        container.appendChild(div);
        
    };
};

window.onload = gridCreator();


// Add rainbow effect to rainbow button.

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("mousemove", rainbowEffect);

function rainbowEffect (e) {
    rainbow.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 35)";
};

// Add new grid button function

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", regenerateGrid)


function regenerateGrid () {
    const cells = document.querySelectorAll(".cell");
    let gridSide = prompt("Please enter a number between 16 and 100:");
    if (gridSide) {
        cells.forEach((cell) => container.removeChild(cell));
    };
    gridCreator(gridSide);
};

// Clears grid each button press

function resetGrid () {
    const cells = document.querySelectorAll(".cell");
    gridSide = Math.sqrt(cells.length);
    cells.forEach(cell => container.removeChild(cell));
    gridCreator(gridSide);
}

// black button 

const black = document.querySelector(".black");
black.addEventListener("click", blackEtch);

function blackEtch () {
    resetGrid();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter",() =>{
            cell.style.backgroundColor = "rgb(0, 0, 0)";
        });
    });
};

// grayTo button 

const grayTo = document.querySelector(".grayTo");
grayTo.addEventListener("click", grayToBlack);

function grayToBlack () {
    resetGrid();
    const cells = document.querySelectorAll(".cell");
    

    cells.forEach((cell) => {
        cell.style.backgroundColor = "rgb(255, 255, 255)";
    });

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (e) => {
            let rgb = e.target.style.backgroundColor;
            console.log(e.target.style.backgroundColor)
            if (rgb.length == 18 ) {
                rgb = e.target.style.backgroundColor.slice(4,7) - 25.5;
            } else {
                rgb = e.target.style.backgroundColor.slice(4,6) - 25.5;
            }
            cell.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        });
    });
};

// Rainbow button

rainbow.addEventListener("click", rainbowEtch);

function rainbowEtch(){
    resetGrid();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        cell.addEventListener("mouseenter",() =>{
            cell.style.backgroundColor = "#" + randomColor;
        });
    });

};


