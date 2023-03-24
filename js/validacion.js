const form =  document.querySelector("[data-form]");
const inputs = document.querySelectorAll("#formcontacto input");
const textArea = document.querySelectorAll("#formcontacto textarea");
const btn = document.querySelector("#btn");
const btnAgradecimiento = document.querySelector("#btn-agradecimiento");

/* const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{0,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^([A-Za-z0-9À-ÿ\_\-\.\,\#\s]){0,50}$/,
    mensaje: /^([A-Za-z0-9À-ÿ\_\-\.\,\#\s]){0,300}$/,
} */

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false,
}

const validarFormulario = (e) => {
    
    switch(e.target.name){
        case "nombre":
            let inputNombre = e.target;
            let exNombre = /^[a-zA-ZÀ-ÿ\s]{0,50}$/;
            if(exNombre.test(inputNombre.value) && inputNombre.value != ""){
                document.getElementById("nombre").classList.remove("incorrecto");
                document.getElementById("error-nombre").classList.remove("mostrar");
                campos.nombre = true;
            }else {
                document.getElementById("nombre").classList.add("incorrecto");
                document.getElementById("error-nombre").classList.add("mostrar");
                setTimeout(() => {
                    document.getElementById("error-nombre").classList.remove("mostrar");
                }, 3000);
                campos.nombre = false;
            }
            break;
        case "email":
            let inputEmail = e.target;
            let exEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if(exEmail.test(inputEmail.value) && inputEmail.value != ""){
                document.getElementById("email").classList.remove("incorrecto");
                document.getElementById("error-email").classList.remove("mostrar");
                campos.email = true;
            }else{
                document.getElementById("email").classList.add("incorrecto");
                document.getElementById("error-email").classList.add("mostrar");
                setTimeout(() => {
                    document.getElementById("error-email").classList.remove("mostrar");
                }, 3000);
                campos.email = false;
            }
            break;
        case "asunto":
            let inputAsunto = e.target;
            let exAsunto = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\?\¿\!\¡\s]){0,50}$/;
            if(exAsunto.test(inputAsunto.value) && inputAsunto.value != ""){
                document.getElementById("asunto").classList.remove("incorrecto");
                document.getElementById("error-asunto").classList.remove("mostrar");
                campos.asunto = true;
            }else{
                document.getElementById("asunto").classList.add("incorrecto");
                document.getElementById("error-asunto").classList.add("mostrar");
                setTimeout(() => {
                    document.getElementById("error-asunto").classList.remove("mostrar");
                }, 3000);
                campos.asunto = false;
            }
            break;
        case "mensaje":
            let inputMensaje = e.target;
            let exMensaje = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\?\¿\!\¡\s]){0,300}$/;
            if(exMensaje.test(inputMensaje.value) && inputMensaje.value != ""){
                document.getElementById("mensaje").classList.remove("incorrecto");
                document.getElementById("error-mensaje-textarea").classList.remove("mostrar");
                campos.mensaje = true;
            }else{
                document.getElementById("mensaje").classList.add("incorrecto");
                document.getElementById("error-mensaje").classList.add("mostrar");
                setTimeout(() => {
                    document.getElementById("error-mensaje").classList.remove("mostrar");
                }, 3000);
                campos.mensaje = false;
            }
            break;

    }
}

inputs.forEach((input) => {
    // console.log("verificando inputs");
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    input.addEventListener("keyup", verificarCampos);
    input.addEventListener("blur", verificarCampos);
});

textArea.forEach((textarea) => {
    console.log(textArea);
    // console.log("verificando textarea");
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
    textarea.addEventListener("keyup", verificarCampos);
    textarea.addEventListener("blur", verificarCampos);
})

function verificarCampos(){
    console.log(`nombre: ${campos.nombre}`);
    console.log(`email: ${campos.email}`);
    console.log(`asunto: ${campos.asunto}`);
    console.log(`mensaje: ${campos.mensaje}`);

    if(campos.nombre && campos.email && campos.asunto && campos.mensaje){
        console.log("todo bien");
        btn.classList.remove("deshabilitado");
        btn.disabled = false;
    }else {
        console.log("algo anda mal");
        btn.classList.add("deshabilitado");
        btn.disabled = true;
    }
}

form.addEventListener('submit', handleSubmit);
btnAgradecimiento.addEventListener('click', () => {
    document.getElementById("sombra").classList.remove("agradecimiento__visible");
    document.getElementById("btn").classList.remove("agradecimiento__btn__invisible");
})

async function handleSubmit(event){
    event.preventDefault();
    const newForm = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: newForm,
        headers: {
            'Accept': 'application/json'
        }
    })

    if(response.ok){
        this.reset();
        document.getElementById("sombra").classList.add("agradecimiento__visible");
        document.getElementById("btn").classList.add("agradecimiento__btn__invisible");
        let agradecimiento = document.getElementById("texto__agradecimiento");
        agradecimiento.innerText = `Hola ${newForm.get('nombre')}, le agradezco por contactarme, responderé su mensaje lo más pronto posible`;
    }else{
        alert(`Algo salió mal, por favor intente de nuevo`);
    }

}



