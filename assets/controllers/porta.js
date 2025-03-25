// Aquí puedes agregar interactividad si es necesario
document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de cambio de color al pasar el mouse por las ventanas
    const ventanas = document.querySelectorAll('.ventana');
    ventanas.forEach(ventana => {
        ventana.addEventListener('mouseenter', () => {
            ventana.style.backgroundColor = '#e0e0e0';
        });

        ventana.addEventListener('mouseleave', () => {
            ventana.style.backgroundColor = '#f5f5f5';
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel__track");
    const images = track.innerHTML; // Guardamos el contenido actual

    // Duplicamos el contenido para efecto de deslizamiento infinito
    track.innerHTML += images;
});