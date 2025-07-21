import React from "react"; // Importe useState
import '../App.css';
import logo from '../assets/Logo.jpg';
    import { FaFacebook, FaInstagram, FaTwitter, FaWeebly } from 'react-icons/fa';
import  'react-icons'; // Importe les icones

function Footer(){

    return(
        <>
        <div className="footer-container">
            <div className="footer-info">
                <div className="part-one">
                    <div className="logo-footer">
                        <img src={logo} alt="Company Logo" />
                        <p>Hôtel de Ville, BP 1234, Yaoundé</p>
                        <p>email : contact@yaounde.cm</p>
                        <p>Tel: (+237) 222 22 22 22</p>
                    </div>
                </div>
                <div className="part-two" id="social-media">
                    <h4>Follow us on:</h4>
                    <div className="social-media-icons">
                        <div className="facebook">
                            <a href=""> <FaFacebook size={50}/></a>
                        </div>
                        <div className="instagram">
                            <a href=""><FaInstagram size={50} /></a>
                        </div>
                        <div className="twitter">
                            <a href=""><FaTwitter size={50} /></a>
                        </div>
                        <div className="other">
                            <a href=""> <FaWeebly size={50}/></a>
                        </div>
                    </div>
                </div>
                <div className="part-three">
                    <h4>News letter</h4>
                    <p>Subscribe to our newsletter to get the latest updates.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <i>By BEKER | 2025</i>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )


};

export default Footer