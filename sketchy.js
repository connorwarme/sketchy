let d = "";
for (i=0; i<256; i++) {
    d += `<div class="box"></div>`;
}
const container = document.querySelector('div.container');
console.log(d);
container.innerHTML = d;
document.getElementsByClassName('box').appendChild('div')
const divs = document.getElementsByClassName('box');

container.addEventListener("mousemove", (e) => {
    changeColor(e)
});

function changeColor(e) {
    e.target.classList.add('active');
};

let restart = document.querySelector('button.reset');
restart.addEventListener('click', reset());

function reset() {
    divs.classList.remove('active');
}