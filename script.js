document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");

    const projects = [
        { 
            title: "Modélisation Supervisée et Gestion du Risque", 
            link: "assets/projets/RAPPORT_ALTERNANCE YAYA AYMAN.pdf", 
            description: "Optimisation des stratégies de décision à travers l'analyse du risque de crédit."
        },
        { 
            title: "Requêtage SQL", 
            link: "assets/projets/BDR.pdf", 
            description: "Conception et optimisation de requêtes SQL pour extraire et analyser les données."
        },
        { 
            title: "Simulation de Processus de Galton-Watson (Python)", 
            link: "assets/projets/Galton.pdf", 
            description: "Modélisation et analyse d'un processus de Galton-Watson."
        },
        { 
            title: "Simulation et Estimation de Distribution (Python)", 
            link: "assets/projets/REJET.pdf", 
            description: "Estimation d'une distribution par la méthode du rejet."
        },
        { 
            title: "Analyse et Prévision de Séries Chronologiques (Rstudio)", 
            link: "assets/projets/Serie_chro.pdf", 
            description: "Modélisation ARMA pour la prévision des températures sur 13 ans."
        },
        { 
            title: "Prédiction du Prix des Smartphones (Rstudio)", 
            link: "assets/projets/Data_science.pdf", 
            description: "Modèles de Machine Learning pour estimer le prix des téléphones."
        },
        { 
            title: "Modélisation des Sinistres en Assurance (Rstudio)", 
            link: "assets/projets/Stat_assu.pdf", 
            description: "Analyse des sinistres automobiles pour optimiser la gestion du risque."
        },
        { 
            title: "Analyse des Réalités Sociales Européennes (Rstudio)", 
            link: "assets/projets/Analyse_de_donnee.pdf", 
            description: "Étude des indicateurs socio-économiques des pays de l'UE."
        },
        { 
            title: "Modélisation de la Relation Sinistres-Assurance (Rstudio)", 
            link: "assets/projets/Modele_de_regression.pdf", 
            description: "Analyse statistique et régression sur les montants des sinistres."
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="project-button">Voir le projet</a>
        `;

        projectsList.appendChild(projectCard);
    });
});
