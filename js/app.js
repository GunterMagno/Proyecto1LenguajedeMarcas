function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('theme-icon').src="img/luna.png";
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').src="img/luna-rellena.png";
}
}

document.addEventListener("DOMContentLoaded", () => {
    const enlacesInteractivos = document.querySelectorAll('a[href="#"]');
    enlacesInteractivos.forEach(enlace => {
        enlace.addEventListener("click", (event) => {
            event.preventDefault(); // Previene la acción predeterminada
            console.log("Clic en el enlace sin mover la página.");
        });
    });
});