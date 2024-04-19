const container = document.querySelector("#container");
const btn = document.querySelector("button");

btn.addEventListener("click", gridSize);

function gridSize() {
    let text;
    let grid = prompt("Please enter grid size (max. 100):", "16");
    if (grid == null || grid == "") {
        text = "User cancelled the prompt.";
    }
    if (grid > 100 || grid < 2){
        text = "Numbers between 2 and 100 are allowed only";
    }
    else{
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
          }
        for (let i = 1; i <= grid; i++) {
            let square = document.createElement("div");
            square.textContent = i;
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}

const div = document.querySelectorAll(".square");
div.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "blue";
    })
});