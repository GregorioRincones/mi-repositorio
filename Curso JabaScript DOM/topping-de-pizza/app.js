const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1.innerHTML);
const titulo =document.getElementById('titulo');
console.log(typeof titulo);
const topping = document.getElementsByClassName('topping');
console.log(topping[5]);

const porEtiqueta = document.getElementsByTagName('li');
console.log(porEtiqueta);

const porEtiquetaFM = document.getElementsByClassName('topping fondo-marron');
console.log(porEtiquetaFM)

const PEN = document.querySelector('.topping');
console.log(PEN);
PEN.style.backgroundColor = 'blue';

const titulop = document.getElementById('titulo');
console.log(titulop.innerText);
titulop.innerText = 'Estan Ricas Las Pizzas';
titulop.style.color = 'white';
titulop.style.backgroundColor = 'red'; 
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.com.org/espanol'));
const primerTopping = document.querySelector('.topping');
primerTopping.classList.add('texto-verde');
console.log(primerTopping.classList);


const listaDeTopping = document.getElementById('lista-toppings')    
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText='Iguana';

listaDeTopping.append(toppingNuevo);


const boton = document.createElement('button');
boton.innerText = 'Boton';
listaDeTopping.appendChild(boton); 

 const toppings = document.getElementsByClassName('topping');

function mostrarClick(e){
    console.log(e.target.innerText);
}

for(const toppings of topping) {
toppings.addEventListener('click', mostrarClick);
}





