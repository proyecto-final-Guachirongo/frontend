const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const cedula = document.getElementById("cedula")
const fecha_nacimiento = document.getElementById("fecha_nacimiento")
const sexo = document.getElementById("sexo")
const clave = document.getElementById("clave")
const checkbox = document.getElementById("checkbox")
const form = document.getElementById("register_form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (nombre.value.length < 3) {
        alert("Nombre muy corto")
    };
    if (apellido.value.length < 3) {
        alert("Apellido muy corto")
    }
    if (!regexEmail.test(correo.value)) {
        alert("El email no es válido")
    }
    if (cedula.value.length < 8 ) {
        alert("Cedula no valida")
    }
})
