const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// actualiza linea de los parrafos 
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizaColor(rojo, verde,azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;     
}

// actualizar inpur para rojo.
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizaColor(rojo, verde,azul);
})

// actualizar inpur para verde.
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoRojo.innerText = verde;
    actualizaColor(rojo, verde,azul);
})

// actualizar inpur para azul.
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizaColor(rojo, verde,azul);
})

