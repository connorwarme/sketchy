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
for (i=0; i<divs.length; i++) {
    divs[i].value = 0;
}

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});

let restart = document.querySelector('button.reset');
restart.addEventListener('click', e => {
    clearGrid(container);
    makeGrid(Number(slider.value));
    console.log(e);
});

let rainbow = document.querySelector('button.rainbow');
rainbow.addEventListener('click', e => {
    container.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = `${generateColor()}`;
    });
});

function generateColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}

let custom = document.querySelector('button.faded');
custom.addEventListener('click', e => {
    for (i=0; i<divs.length; i++) {
        divs[i].addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = `black;`;
        ++e.target.value;
        const opaqueValue = (e.target.value * 0.1);
        e.target.style.opacity = `${opaqueValue}`;
    });
}});

//function colorFade(e) {
//   e.target.classList.add('faded');
//    const faded = Array.from(document.querySelectorAll('div.faded'));
//    for (i=0; faded.length; i++) {
//        faded[i].style["background-color"] = "black";
//       faded[i].style["opacity"] = 0.1;
//    }
//}