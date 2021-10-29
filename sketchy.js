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

container.addEventListener("mouseover", (e) => {
    colorBlack(e);
});


function colorBlack(e) {
    e.target.classList.add('active');
    const active = Array.from(document.querySelectorAll('div.active'));
    for (i=0; i<active.length; i++) {
        active[i].style.cssText = "background-color: black;";
    }; 
};

let restart = document.querySelector('button.reset');
restart.addEventListener('click', e => {
    clearGrid(container);
    makeGrid(Number(slider.value));
    console.log(e);
});

let rainbow = document.querySelector('button.rainbow');
rainbow.addEventListener('click', e => {
    container.addEventListener("mouseover", (e) => {
        colorRainbow(e)
    });
});

function colorRainbow(e) {
    e.target.classList.add('rainbow');
    function generateColor() {
        let x = Math.floor(Math.random() * 255);
        let y = Math.floor(Math.random() * 255);
        let z = Math.floor(Math.random() * 255);
        return `rgb(${x}, ${y}, ${z})`;
    }
    const colorful = Array.from(document.querySelectorAll('div.rainbow'));
    for (i=0; i<colorful.length; i++) {
        colorful[i].style.cssText = `background-color: ${generateColor()}`;
    }
}

//let custom = document.querySelector('button.faded');
//custom.addEventListener('click', e => {
//    container.addEventListener('mouseover', e => {
//        colorFade(e);
//    });
//});

//function colorFade(e) {
//   e.target.classList.add('faded');
//    const faded = Array.from(document.querySelectorAll('div.faded'));
//    for (i=0; faded.length; i++) {
//        faded[i].style["background-color"] = "black";
//       faded[i].style["opacity"] = 0.1;
//    }
//}