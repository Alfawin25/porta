document.addEventListener("DOMContentLoaded", () => {
    const portafolioContainer = document.querySelector(".portafolio__container");

    const proyectos = [
        {
            titulo: "Proyecto 1",
            descripcion: "Descripción breve del primer proyecto.",
            imagen: "https://img.youtube.com/vi/5wb81xzpflw/maxresdefault.jpg",
            enlace: "https://www.youtube.com/watch?v=5wb81xzpflw"
        },
        {
            titulo: "Proyecto 2",
            descripcion: "Descripción breve del segundo proyecto.",
            imagen: "https://img.youtube.com/vi/e_HMDc3jcac/maxresdefault.jpg",
            enlace: "https://www.youtube.com/watch?v=e_HMDc3jcac"
        },
        {
            titulo: "Proyecto 3",
            descripcion: "Descripción breve del tercer proyecto.",
            imagen: "https://img.youtube.com/vi/5wb81xzpflw/maxresdefault.jpg",
            enlace: "https://www.youtube.com/?app=desktop&hl=es"
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
