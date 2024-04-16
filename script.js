const container = document.querySelector("#container");

for(let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const div = document.querySelectorAll(".square");

div.forEach((square) => {
    square.addEventListener("onmouseover", function(e) {
        e.target.style.backgroundColor = "blue";
    })
});