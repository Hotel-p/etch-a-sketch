const container = document.querySelector(".container");
const slider = document.querySelector(".slider");

let size = slider.value;
let color = prompt("enter color: ");

function createGrid(size){

    container.setAttribute(
        'style',
        `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`
    );

        
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.borderRadius = "10%";
        container.appendChild(square);

        // change background color of a square on hover
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = `${color}`;
        })
    }

}

createGrid(size);

slider.addEventListener('change',()=>{
    container.innerHTML = "";
    let number = slider.value;
    createGrid(number);
})







