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
    email.addEventListener('blur', validarEmail);
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
function validarCampos(e){
      e.preventDefault();

      // longitud arroja cuantos valores estan escritos
     let longitud = e.target.value.length;
     //accede al los inputs
     let input = e.target;
     //valida que todos los campos tengan algo escrito
     if(longitud > 0){
        input.style.borderColor = 'green';
        input.classList.remove('error');
    } else {
         input.style.borderColor = 'red';
         input.classList.add('error');
    }
    //HABILITAR el botno BTNENVIAR
}
function validarEmail(e) {
    e.preventDefault();
    //valida que el email sea correcto
    let inputEmail = e.target.value;
    // ACCEDE AL INPUT
    let input = e.target;
    //variable con signos validos
    let signosValidos = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (signosValidos.test(inputEmail)){
            input.style.borderColor = 'green';
            input.classList.remove('error');
        } else {
            input.style.borderColor = 'red';
            input.classList.add('error');
        }
        
}



///^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i