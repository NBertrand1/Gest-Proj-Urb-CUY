import React, { useEffect } from "react";
import  Navbar from '../components/navbar';
import  Footer from '../components/footer';
import logo from '../assets/Logo.jpg';
import '../App.css';
import { FaAccessibleIcon, FaChartBar, FaLightbulb, FaRegCalendarAlt, FaRegFilePdf, FaToolbox, FaCommentsDollar } from "react-icons/fa";

function Home() {
    
    useEffect(() => {
        // Fonction pour animer le compteur
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            let current = 0;
            const increment = target / 100; // Vitesse de l'animation (200 frames)
            
            // Fonction qui met à jour l'élément à chaque "frame" de l'animation
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    // Pour gérer les cas où il y a un '%'
                    element.textContent = element.textContent.includes('%') 
                    ? Math.ceil(current) + '%' 
                    : '+ de ' + Math.ceil(current);
                    requestAnimationFrame(updateCounter); // Appel récursif pour la fluidité
                } else {
                    // S'assurer que le nombre final est exact
                    element.textContent = element.textContent.includes('%') 
                    ? target + '%' 
                    : '+ de ' + target;
                }
            };
            
            updateCounter();
        };
        
        // Intersection Observer pour déclencher l'animation
        const observerOptions = {
            root: null, // L'élément racine est le viewport
            rootMargin: '0px',
            threshold: 0.5 // Déclenche quand 50% de l'élément est visible
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est dans la zone de visualisation
                    const statsElements = entry.target.querySelectorAll('.stat-number');
                    statsElements.forEach(animateCounter);
                    
                    // On arrête d'observer pour que l'animation ne se redéclenche pas
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Fonction pour initialiser le script
        const initCounterAnimation = () => {
            const statsSection = document.getElementById('impact');
            if (statsSection) {
                // Si la section existe, on l'observe
                observer.observe(statsSection);
            }
        };

        // On appelle la fonction d'initialisation une fois le composant monté
        initCounterAnimation();
    }, []); // Le tableau vide [] assure que le code ne s'exécute qu'une seule fois

    return (
        <>
        <Navbar />
        <div className="main-container">
           <div className="first-part">
                <div className="first-part-content">
                    <div className="part-one">
                        <div className="text">
                            <h1>Optimisez la gestion de vos projets urbains</h1>
                                <p>
                                    Découvrez notre nouvelle plateforme de gestion de projets, 
                                    conçue pour la Communauté Urbaine de Yaoundé. Suivez l'avancement,
                                    gérez les ressources et prenez des décisions éclairées 
                                    grâce à l'intelligence artificielle.
                                    
                                 </p>
                            <button>
                                <a href="#service-list">Découvrir nos services</a>
                            </button>
                        </div>
                        <div className="image">
                            <img src={logo} alt="" width={500} height={400}/>
                        </div>
                    </div>
                </div>
           </div>
           <div className="second-part">
                <div className="title">
                        <h1>Nos Fonctionnalités</h1>
                        <p>
                            Notre plateforme intègre les outils essentiels
                            pour une gestion de projet moderne et efficace au sein de la CUY.
                        </p>
                 </div>
                <div className="second-part-content">
                    <div className="part-one">
                        <div className="card-1">
                            <div className="image">
                                <FaToolbox size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Suivi des Projets</h2>
                                <p>
                                    Suivez l'avancement de vos projets en temps réel,
                                    avec des mises à jour régulières et des rapports détaillés.
                                </p>    
                            </div>
                        </div>
                        <div className="card-2">
                            <div className="image">
                                <FaChartBar size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Suivi des Projets</h2>
                                <p>
                                    Suivez l'avancement de vos projets en temps réel,
                                    avec des mises à jour régulières et des rapports détaillés.
                                </p>    
                            </div>
                        </div>
                        <div className="card-3">
                            <div className="image">
                                <FaRegFilePdf size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Rapports et Analyses de Performances</h2>
                                <p>
                                    Créez des tableaux de bord dynamiques et des rapports personnalisés sur l'avancement de 
                                    vos projets.
                                </p>    
                            </div>
                        </div>
                    </div>
                    <div className="part-two">
                        <div className="card-4">
                            <div className="image">
                                <FaRegCalendarAlt size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Gestion des Tâches et des Livrables</h2>
                                <p>
                                    Décomposez vos projets en tâches claires et suivez la 
                                    progression de chaque livrable jusqu'à son achèvement.
                                </p>    
                            </div>
                        </div>
                        <div className="card-5">
                            <div className="image">
                                <FaCommentsDollar size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Suivi Budgétaire et Financier</h2>
                                <p>
                                    Contrôlez les dépenses en temps réel et 
                                    générez des rapports financiers détaillés pour une transparence totale.
                                </p>    
                            </div>
                        </div>
                        <div className="card-6">
                            <div className="image">
                                <FaLightbulb size={75} color="gold"/>
                            </div>
                            <div className="text">
                                <h2>Recommandation Intelligente</h2>
                                <p>
                                    Bénéficiez de suggestions basées sur l'IA pour optimiser vos ressources 
                                    et la planification de vos projets.
                                </p>    
                            </div>
                        </div>
                    </div>
                </div> 
           </div>
           <div className="third-part">
                <div id="about">
                    <h1 className="about-title-1">À Propos de Nous</h1>
                    <div className="about-container">
                        <div className="about-image">
                            <img src={logo} alt="About Us" />
                        </div>
                        <div className="about-content-wrapper">
                            <h2 className="about-title-2">Notre Engagement pour Yaoundé</h2>
                            <p className="about-description">
                                La Communauté Urbaine de Yaoundé est l'institution en charge de la gestion et du développement de la capitale politique du Cameroun. Notre mission est de fournir des services publics de qualité, de planifier un développement urbain durable et harmonieux, et de promouvoir le bien-être de tous les citoyens.
                            </p>
                            <ul className="abouts-list">
                                <li className="about-list-item">
                                    <span className="about-list-icon">✓</span> Transparence et gouvernance ouverte.
                                </li>
                                <li className="about-list-item">
                                    <span className="about-list-icon">✓</span> Efficacité et modernisation des services.
                                </li>
                                <li className="about-list-item">
                                    <span className="about-list-icon">✓</span> Proximité et écoute des citoyens.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
           <div className="four-part">
                <div id="impact" className="impact-section">
                    <div className="impact-container">
                        <h2 className="impact-title">Notre Impact et Progrès</h2>
                        <div className="impact-stats-grid">
                            <div className="stat-item">
                                <p className="stat-number" data-target="150">
                                + de 150
                                </p>
                                <p className="stat-description">Projets gérés via la plateforme</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number" data-target="250">
                                + de 250
                                </p>
                                <p className="stat-description">Utilisateurs actifs</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-number" data-target="30">
                                30%
                                </p>
                                <p className="stat-description">Gain d'efficacité opérationnelle</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="five-part">
                <div id="cta" className="cta-section">
                    <div className="cta-container">
                        <h2 className="cta-title">Prêt à transformer la gestion de vos projets ?</h2>
                        <p className="cta-description">
                        Rejoignez la plateforme et découvrez comment nos outils peuvent optimiser vos opérations quotidiennes à la Communauté Urbaine de Yaoundé.
                        </p>
                        <button className="cta-button">
                        Accéder à la Plateforme
                        </button>
                    </div>
                </div>
           </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;