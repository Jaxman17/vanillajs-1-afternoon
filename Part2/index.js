let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');


function reset() {
    location.reload();
}

function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}