const container = document.getElementById("container");
const item = document.querySelectorAll(".grid-item");
const colord = "#333333";

let color = colord;

function makeRows(rows, columns){
    container.style.setProperty("--grid-rows" , rows);
    container.style.setProperty("--grid-columns", columns);

    for (let j = 0; j < (rows * columns); j++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor)
        container.appendChild(cell).className = "grid-item"
    };
};

makeRows(17,17)

item.onmouseover = changeColor;

function changeColor(e) {
    e.target.style.backgroundColor = color;
}
