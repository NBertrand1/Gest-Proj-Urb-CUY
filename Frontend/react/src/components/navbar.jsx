// src/components/Navbar.jsx

import React, { useState } from "react"; // Importe useState
import '../App.css';
import logo from '../assets/Logo.jpg';
import { FaAdjust, FaAtlas, FaChevronDown, FaSignInAlt, FaUserPlus} from 'react-icons/fa'; // Importe une icône de flèche

function Navbar() {
    // Déclare une variable d'état pour contrôler la visibilité du sous-menu "Services"
    const [isServicesSubmenuOpen, setIsServicesSubmenuOpen] = useState(false);

    // Fonction pour basculer l'état du sous-menu
    const toggleServicesSubmenu = () => {
        setIsServicesSubmenuOpen(!isServicesSubmenuOpen);
    };

    return(
        <>
            <div className="nav-container">
                <div className="logo-container">
                    <div className="logo-img">
                        <img 
                            src={logo} 
                            alt="Company Logo"
                            width="500" 
                            height="400" 
                         /> {/* Ajout d'un alt text pour l'accessibilité */}
                    </div>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li><a href="" id="home">Home</a></li> {/* Utilise # pour les liens vides */}
                        <li className="has-submenu"> {/* Ajout d'une classe pour cibler ce li si besoin */}
                            {/* Div cliquable pour le toggle du sous-menu */}
                            <div className="services-toggle" onClick={toggleServicesSubmenu}>
                                <span>Services</span>
                                {/* Icône qui tourne en fonction de l'état du sous-menu */}
                                <FaChevronDown className={`toggle-icon ${isServicesSubmenuOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {/* Le sous-menu réel, dont la visibilité est contrôlée par l'état */}
                            <ol id="services-list" className={isServicesSubmenuOpen ? 'show-submenu' : ''}>
                                <li><a href="">Service 1</a></li>
                                <li><a href="">Service 2</a></li>
                                <li><a href="">Service 3</a></li>
                            </ol>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="nav-buttons">
                    <div className="nav-buttons-icon">
                        {/* Ici tu pourrais ajouter une icône de menu burger pour mobile, par exemple */}
                        <div className="nav-icons">
                            <FaAdjust size={20}/>
                                <span></span>
                            <FaAtlas size={20}/>
                        </div>
                    </div>
                    <div className="nav-buttons-forms">
                        <button className="sign-in">
                            <FaSignInAlt />  
                            <p>Log In</p>
                        </button>
                        <button className="sign-up">
                            <FaUserPlus />
                            <p>Sign Up</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;