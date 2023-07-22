const container = document.querySelector(".container");

let size = prompt("enter size: ");
let color = prompt("enter color: ");

function createGrid(size){
        container.setAttribute(
        'style',
        `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`
        );

        
        for (let i = 0; i < size*size; i++) {
            
            let square = document.createElement("div");
            square.style.backgroundColor = "black";

            square.style.border = "2px solid blue";
            container.appendChild(square);
    
            // change background color of a square on hover
            square.addEventListener('mouseover', ()=>{
                square.style.backgroundColor = `${color}`;
            })
        }
}

createGrid(size);



