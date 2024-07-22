/*let elemento
    elemento = Document;
elemento = document.head;
elemento = document.body; 
elemento = document.title; */
/* let elemento = window; */
/*let elemento = document.querySelector('h2');*/
/*let elemento = document.styleSheets*/

/*const elemento = document.getElementById('mensaje');
console.log(elemento);*/

/*  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  */

/*
function evento() {
    alert('mensaje enviado!!!')
}


function evento1() {
    alert('activaste click derecho!!!')
}

function evento2() {
    alert('activaste  DOBLE click derecho!!!')
}

function evento3() {
    alert('presionaste  mouse aqui     !!!')
}

function evento4() {
    alert('Se movio mouse aqui   !!!')
}

function evento5() {
    alert('Mouse salio de aqui   !!!')
}

function evento6() {
    alert('Mouse se movio  de aqui   !!!')
}

function evento7() {
    alert('Soltaste el Mouse  aqui   !!!')
}

const entrada = document.getElementById('input')
entrada.addEventListener('keydown',function(e){
    console.log('presionaste la ' + e.key)}) 



    const nodos = []
    for (let i = 0; i < 80; i++ ){
      const nodo = document.createElement('input');
    nodos.push(nodo)}

    document.body.append(...nodos) */

    const padre = document.getElementById('padre');
    console.log(padre.lastElementChild);



    

    const URL = 'https://api.thecatapi.com/v1/images/search';

    fetch(URL)

 
    .then(res => res.json())
    .then(data =>{
      const img = document.querySelector('img');  
        img.src = data[0].url; 
    } )