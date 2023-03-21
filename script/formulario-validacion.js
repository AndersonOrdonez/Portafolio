const inputs = document.querySelectorAll('.input');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) =>{
        verificarInput(input.target);
    });

    input.addEventListener('focus', (input) => {
        limpiarSpan(input.target);
    });
    }
);

function verificarInput(input) {
    const tipoData = input.dataset.tipo;
    const tipoDeInput = input;
    const container = tipoDeInput.parentElement;
    const mensaje = container.children[0];

    if (input.validity.valid){
        mensaje.innerHTML = "";
    }
    else {
        mensaje.innerHTML = mostrarMensajeDeError(tipoData, input);
    }
}

function limpiarSpan(input){
    const tipoDeInput = input;
    const container = tipoDeInput.parentElement;
    const mensaje = container.children[0];

    if (!input.validity.valid){
        mensaje.innerHTML = "";
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "CustomError",
    "tooShort",
    "tooLong",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        tooShort: "Es demasiado corto",
        tooLong: "No debe exceder de 50 caracteres",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "El formato del correo no es válido",
    },
    
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El asunto debe contener entre 4 a 50 caracteres",
        tooShort: "Es demasiado corto",
        tooLong: "No debe exceder de 50 caracteres",
    },

    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El mensaje debe contener entre 4 a 300 caracteres",
        tooShort: "Es demasiado corto",
        tooLong: "No debe exceder de 330 caracteres",
    }
}

function mostrarMensajeDeError (tipoData,input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
        mensaje = mensajesDeError[tipoData][error];
        }
    });
    
    return  mensaje;
}


document.querySelector('.button-registrar').addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log('Función para enviar los datos');
});