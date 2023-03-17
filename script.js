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



