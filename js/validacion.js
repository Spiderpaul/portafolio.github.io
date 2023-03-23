const formContacto = document.querySelector("#formcontacto");
const inputs = document.querySelectorAll("#formcontacto input");
const textArea = document.querySelectorAll("#formcontacto textarea")

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
            if(exNombre.test(inputNombre.value)){
                document.getElementById("nombre").classList.remove("incorrecto");
                document.getElementById("error-nombre").classList.remove("mostrar");
                campos.nombre = true;
            }else {
                document.getElementById("nombre").classList.add("incorrecto");
                document.getElementById("error-nombre").classList.add("mostrar");
                campos.nombre = false;
            }
            break;
        case "email":
            let inputEmail = e.target;
            let exEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if(exEmail.test(inputEmail.value)){
                document.getElementById("email").classList.remove("incorrecto");
                document.getElementById("error-email").classList.remove("mostrar");
                campos.email = true;
            }else{
                document.getElementById("email").classList.add("incorrecto");
                document.getElementById("error-email").classList.add("mostrar");
                campos.email = false;
            }
            break;
        case "asunto":
            let inputAsunto = e.target;
            let exAsunto = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\s]){0,50}$/;
            if(exAsunto.test(inputAsunto.value)){
                document.getElementById("asunto").classList.remove("incorrecto");
                document.getElementById("error-asunto").classList.remove("mostrar");
                campos.asunto = true;
            }else{
                document.getElementById("asunto").classList.add("incorrecto");
                document.getElementById("error-asunto").classList.add("mostrar");
                campos.asunto = false;
            }
            break;
        case "mensaje":
            let inputMensaje = e.target;
            let exMensaje = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\s]){0,300}$/;
            if(exMensaje.test(inputMensaje.value)){
                document.getElementById("mensaje").classList.remove("incorrecto");
                document.getElementById("error-mensaje").classList.remove("mostrar");
                campos.mensaje = true;
            }else{
                document.getElementById("mensaje").classList.add("incorrecto");
                document.getElementById("error-mensaje").classList.add("mostrar");
                campos.mensaje = false;
            }
            break;

    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

textArea.forEach((textarea) => {
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
})

/* formContacto.addEventListener("submit", (e) => {

    if(!campos.nombre && !campos.email && !campos.asunto && !campos.mensaje){
        console.log("no puede mandar correo");
        // document.getElementById("formcontacto__btn").classList.add("deshabilidado");
        document.getElementById("formcontacto__btn").disabled = true;
    }
}) */