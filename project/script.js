// slider
let presentIndx = 0;
const rows = document.querySelectorAll('.book-row');
const rowContainer = document.querySelector('.book-row-container');
const backB = document.querySelector('.back');
const forwardB = document.querySelector('.forward');

function updateIndex(x) {
    presentIndx = (presentIndx + x + rows.length) % rows.length;
    presentRow(presentIndx);
}

function presentRow(i) {
    rowContainer.style.transform = `translateX(-${i * 100}%)`;
}
presentRow(presentIndx);

backB.addEventListener('click', () => updateIndex(-1));
forwardB.addEventListener('click', () => updateIndex(1));
