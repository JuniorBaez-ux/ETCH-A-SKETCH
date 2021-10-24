const container = document.getElementById("container");

function makeRows(rows, columns){
    container.style.setProperty("--grid-rows" , rows);
    container.style.setProperty("--grid,columns", columns);

    for (let j = 0; j < (rows * columns); j++) {
        let cell = document.createElement("div");
        cell.innerText = (j + 1);
        container.appendChild(cell).className = "grid-item"
    };
};

makeRows(16,16)