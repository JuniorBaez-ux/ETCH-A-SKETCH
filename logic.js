const container = document.getElementById("container");

function makeRows(rows, columns){
    container.style.setProperty("--grid-rows" , rows);
    container.style.setProperty("--grid-columns", columns);

    for (let j = 0; j < (rows * columns); j++) {
        let cell = document.createElement("div");
        // cell.innerText = (j + 1);
        container.appendChild(cell).className = "grid-item"
    };
};

makeRows(17,17)

const item = document.querySelectorAll(".grid-item");
// item.onmouseover = changeColor(item);
// item.onmouseout = changeColor(item);
item.onmouseover = changeColor(item);

function changeColor() {
    e.target.style.background = "rebeccapurple"
}

// item.addEventListener("mouseover", function(e){
//     changeColor(e);
// });

// item.forEach(changeColor(this)) {
//     grid-item.addEventListener("mouseover", function(e){
//         changeColor(e)
//     });
// });

// item.forEach(
//     function changeColor(e) {
//         this.target.style.props.background = "rebeccapurple"
//     }

// );

// for (let i = 0; i < item.length; i++) {
// item.addEventListener("mouseover", function(e){
//         changeColor(item[i]);
//     });
// }