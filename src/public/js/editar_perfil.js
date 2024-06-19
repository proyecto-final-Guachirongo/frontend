
// Función para mostrar la segunda ventana al hacer clic en el enlace "Actualizar Datos"
function mostrarSegundaVentana() {
    // Obtiene la primera ventana
    var firstVentana = document.querySelector('.first-ventana');
    // Oculta la primera ventana cambiando su estilo de display a "none"
    firstVentana.style.display = 'none';

    // Obtiene la segunda ventana
    var secondVentana = document.getElementById('segundaVentana');
    // Muestra la segunda ventana cambiando su estilo de display a "grid"
    secondVentana.style.display = 'grid';
}

// Espera a que se cargue completamente la ventana antes de ejecutar el código
window.onload = function() {
    // Obtiene el enlace "Actualizar Datos"
    var actualizarDatos = document.querySelector('.barra-menu a:nth-child(3)');

    // Agrega un evento de clic al enlace de "Actualizar Datos" que llame a la función mostrarSegundaVentana
    actualizarDatos.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        // Llama a la función mostrarSegundaVentana
        mostrarSegundaVentana();
    });
};

// Función para mostrar la primera ventana al hacer clic en "Foto de Perfil"
function mostrarPrimerVentana() {
    // Obtiene la primera ventana
    var firstVentana = document.querySelector('.first-ventana');
    // Muestra la primera ventana cambiando su estilo de display a "grid"
    firstVentana.style.display = 'grid';

    // Oculta la segunda ventana si estaba visible al mostrar la primera ventana
    var secondVentana = document.getElementById('segundaVentana');
    secondVentana.style.display = 'none';
}
