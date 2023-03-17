const container = document.querySelector(".container");
console.log(container);

// Creates 16 x 16 grids when page loaded.

function gridCreator(gridSide = 16) {
    
    for (let i = 0; i < (gridSide * gridSide); i++) {
        let cellSide = Math.round(500/gridSide - 3);
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("style", `width: ${cellSide}px; height: ${cellSide}px;`);
        container.appendChild(div);
        
    };
};

window.onload = gridCreator();