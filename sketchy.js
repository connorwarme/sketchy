const container = document.querySelector('div.container');
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
let black = document.querySelector('button.black');
black.addEventListener('click', e => {
    for (i=0; i<divs.length; i++) {
        divs[i].removeEventListener('mouseleave', specificFade)
    };
    container.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = "1";
    });
});
let white = document.querySelector('button.white');
white.addEventListener('click', e => {
    for (i=0; i<divs.length; i++) {
        divs[i].removeEventListener('mouseleave', specificFade)
    };
    container.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "white";
        e.target.style.opacity = "1";
    });
});
let rainbow = document.querySelector('button.rainbow');
rainbow.addEventListener('click', e => {
    for (i=0; i<divs.length; i++) {
        divs[i].removeEventListener('mouseleave', specificFade)
    };
    container.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = `${generateColor()}`;
        e.target.style.opacity = "1";
    });
});
function generateColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}
let specificFade = function(e) {
    e.target.style.backgroundColor = `black;`;
    ++e.target.value;
    const opaqueValue = (e.target.value * 0.1);
    e.target.style.opacity = `${opaqueValue}`;
};
let generalFade = function() {
    resetValue;
    for (i=0; i<divs.length; i++) {
    divs[i].addEventListener('mouseleave', specificFade);
}};
let resetValue = function() {
    for (i=0; i<divs.length; i++) {
        divs[i].value = "1";
    };
}
let custom = document.querySelector('button.faded');
custom.addEventListener('click', generalFade);




// styling via JS
restart.style.cssText = `height: 50px; width: 200px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;`
slider.style.cssText = `width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;`
black.style.cssText = `height: 50px; width: 200px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;`
white.style.cssText = `height: 50px; width: 200px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;`
rainbow.style.cssText = `height: 50px; width: 200px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;`
custom.style.cssText = `height: 50px; width: 200px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;`
const totality = document.querySelector('div.total');

const buttons = document.querySelector('div.options');

container.style.cssText = `border: 2px solid black;`