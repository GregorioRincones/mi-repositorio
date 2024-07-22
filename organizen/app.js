const formulario = document.getElementById('form') 
 /*formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let mail = document.getElementById('mail_form').value
    console.log(mail)
})*/
const checkbox = document.getElementById('activador')
checkbox.addEventListener('change', e =>{
    if (e.target.checked){
    console.log('solicitud aceptada')
}
else{
    console.log('active solisitud')
}
} ) 