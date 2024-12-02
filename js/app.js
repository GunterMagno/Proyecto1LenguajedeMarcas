// Función para alternar entre modo claro y oscuro
function toggleTheme() {
    const currentTheme = document.documentElement; // Referencia al <html>

    // Si el tema actual es oscuro, cambia a claro
    if (currentTheme.getAttribute('data-theme') === 'dark') {
        currentTheme.setAttribute('data-theme', 'light');
        // Cambiar el ícono (modo nocturno)
        document.getElementById('theme-icon').innerHTML = '<img src="img/luna.png" alt="Modo Nocturno">';
        // Guardar la preferencia en localStorage
        localStorage.setItem('modoOscuro', 'desactivado');
    } else {
        // Si el tema actual es claro, cambia a oscuro
        currentTheme.setAttribute('data-theme', 'dark');
        // Cambiar el ícono (modo claro)
        document.getElementById('theme-icon').innerHTML = '<img src="img/luna-rellena.png" alt="Modo Claro">';
        // Guardar la preferencia en localStorage
        localStorage.setItem('modoOscuro', 'activado');
    }
}

// Función para comprobar el estado del modo oscuro al cargar la página
function comprobarModoOscuro() {
    const savedMode = localStorage.getItem('modoOscuro');

    // Si el modo oscuro está activado en localStorage, aplicarlo
    if (savedMode === 'activado') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('theme-icon').innerHTML = '<img src="img/luna-rellena.png" alt="Modo Claro">';
    } else {
        // Si no, mantener el modo claro
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('theme-icon').innerHTML = '<img src="img/luna.png" alt="Modo Nocturno">';
    }
}

// Llamar a la función cuando la página se cargue para aplicar el tema guardado
window.onload = comprobarModoOscuro;

// Evitar la acción por defecto de los enlaces con href="#"
document.addEventListener("DOMContentLoaded", () => {
    const enlacesInteractivos = document.querySelectorAll('a[href="#"]');
    enlacesInteractivos.forEach(enlace => {
        enlace.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar desplazarse a la parte superior de la página
            console.log("Clic en el enlace sin mover la página.");
        });
    });
});
