//VARIABLES//
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//EVENT LISTENERS//

eventListeners();

function eventListeners(){
    //inicio de la aplicacion y deshabilitamos submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Eventos campos del formulario
    email.addEventListener('blur', validarCampos);
    asunto.addEventListener('blur', validarCampos);
    mensaje.addEventListener('blur', validarCampos);
}


// F U N C I O N E S //
/*se ejecuta con evenlistener*/
function inicioApp(){
    //deshabilitar el boton envio
    btnEnviar.disabled = true;
}
/*se ejecuta con evenlistener*/
function validarCampos(){
    
    /*se ejecuta el addEventListener, en el campo del formulario seleccionado,
    y a traves de "THIS" accedemos a la informacion de cual campo es el que se esta ejecutando,
    final mente esta informacion la mandamos a otra funcion con el parametro "this"*/
    validarLongitud(this);

   if(this.type == 'email'){
       validarEmail(this);
   }
 
   let errores = document.querySelectorAll('.error');
   console.log(errores);

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' && errores.length === 0){
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}
function validarLongitud(entrada){
    if(entrada.value.length > 0){
        entrada.style.borderColor = 'green';
        entrada.classList.remove('error');
    } else {
         entrada.style.borderColor = 'red';
         entrada.classList.add('error');
    } 
}
function validarEmail(entradaEmail) {
    
    //accede a los valores en el input de email
    let mensaje = entradaEmail.value;
    //variable con signos validos para email
    let signosValidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (signosValidos.test(mensaje)){
            entradaEmail.style.borderColor = 'green';
            entradaEmail.classList.remove('error');
        } else {
            entradaEmail.style.borderColor = 'red';
            entradaEmail.classList.add('error');
        }     
}

/*^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i*/