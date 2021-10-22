let d = "";
for (i=0; i<128; i++) {
    d += `<div class="box"></div>`;
}
const container = document.querySelector('div.container');
const divs = document.querySelectorAll('div');
container.innerHTML = d;
