const container = document.querySelector('div.container');
console.log(typeof(container));
const slider = document.getElementById('gridRange');
const output = document.getElementById('output');


slider.oninput = function () {
    output.textContent = `Grid size: ${this.value} x ${this.value}`;
    console.log(this.value);
    const newGridSize = this.value;
    makeGrid(newGridSize);
}
const gridSize = Number(slider.value);

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

function makeGrid(input) {
    clearGrid(container);
    let gridWidth = (container.offsetWidth / input);
container.style.cssText = `grid-template-columns: repeat(${input}, minmax(${gridWidth}px, auto));
    grid-template-rows: repeat(${input}, minmax(${gridWidth}px, auto));`;

    for (i=0; i<(input ** 2); i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
    };
}

makeGrid(gridSize); 

const group = document.getElementsByClassName('box');
const divs = Array.from(group);
console.log(divs);

container.addEventListener("mousemove", (e) => {
    colorBlack(e)
});

function colorBlack(e) {
    e.target.classList.add('active');
};

let restart = document.querySelector('button.reset');
restart.addEventListener('click', e => {
    clearGrid(container);
    makeGrid(Number(slider.value));
    console.log(e);
});

let rainbow = document.querySelector('button.rainbow');
rainbow.addEventListener('click', e => {
    const active = Array.from(document.querySelectorAll('div.active'));
    console.log(active);
    container.appendChild('.active');
    active.style.cssText = "background-color: blue;";
    
});