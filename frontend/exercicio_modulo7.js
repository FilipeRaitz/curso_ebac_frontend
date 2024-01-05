const formulario = document.getElementById('formulario');

const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

console.log("hi!");


function valida(valorA, valorB) {
    return valorB > valorA;
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if (valida(campoA.value, campoB.value)){
        alert('Parabens!');
    } else {
        alert('Errado! O valor em campo B dever ser maior do que em campo A');
    }
});