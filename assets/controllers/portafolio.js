document.addEventListener("DOMContentLoaded", () => {
    const portafolioContainer = document.querySelector(".portafolio__container");

    const proyectos = [
        {
            titulo: "ROBOTEACHER",
            descripcion: "Un robot maestro que enseña inglés, integrando Unity y Java para una experiencia interactiva.",
            imagen: "./assets/images/roboteacher.jpg",
            enlace: "https://github.com/Alfawin25/RoboTeacher-Java-Unity"
        },
        {
            titulo: "Editor-Grafico-2D-y-3D",
            descripcion: "Aplicación en Java para dibujar y manipular gráficos en 2D y 3D",
            imagen: "./assets/images/EditorFormas.jpg",
            enlace: "https://github.com/Alfawin25/Editor-Grafico-2D-y-3D"
        },
        {
            titulo: "Analisis de Redes",
            descripcion: "Archivos de Cisco Packet Tracer sobre VLANs, DHCP, DNS y paso de mensajes",
            imagen: "./assets/images/VLANS.jpg",
            enlace: "https://github.com/Alfawin25/Analisis-y-Dise-o-De-Redes"
        }
    ];

    proyectos.forEach(proyecto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
        `;

        card.addEventListener("click", () => {
            window.open(proyecto.enlace, "_blank");
        });

        portafolioContainer.appendChild(card);
    });
});
