// seleccionar elementos del DOM
const boton = document. querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i =  0; i < 6;  i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio]; 
        console.log(colorHex);
        console.log(indiceAleatorio);
    } 
    
        return colorHex;      
}
   

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    // Actualiza color de fondo
    color.textContent = colorAleatorio;
    // Actualiza color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});