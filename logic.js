const container = document.getElementById("container");
const item = document.querySelectorAll(".grid-item");
const boton = document.getElementById("Resizebtn");
const defaultcolor = "ededed";
const colord = "#333333";

let color1 = defaultcolor;
let color = colord;
let itemes = item;

function makeRows(rows, columns){
    container.style.setProperty("--grid-rows" , rows);
    container.style.setProperty("--grid-columns", columns);
    
    for (let j = 0; j < (rows * columns); j++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor)
        container.appendChild(cell).className = "grid-item"
    };
};

makeRows(16,16)


// This code is in charge of changing the color of the grids 
item.onmouseover = changeColor;

function changeColor(e) {
    e.target.style.backgroundColor = color;
}

function defaultColor(e){
    e.target.style.backgroundColor = color1; 
}

//This code is in charge of getting the size 

boton.onclick = getSize;

function getSize(e){
    e = window.prompt("Please enter the size of the grid (Only one dimension)");
    if (e <= 100) {
        defaultColor;
        makeRows(e, e);   
    }else{
        window.alert("Value out of limits")
    }
}