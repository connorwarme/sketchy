let d = "";
for (i=0; i<256; i++) {
    d += `<div class="box"></div>`;
}
const container = document.querySelector('div.container');
const divs = document.querySelectorAll('.box');
container.innerHTML = d;

container.addEventListener("mousemove", (e) => {
    changeColor(e)
});

function changeColor(e) {
    e.target.style.background = 'black';
};