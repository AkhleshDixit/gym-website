import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container1">
                    <div className="footer-logo">
                        <h2>FITNESS<span>Club</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus inventore tenetur consequuntur itaque distinctio?</p>
                        <div className="footer-icons">
                            <a href="https://www.facebook.in" target="_blank" rel="noreferrer">
                                <FaFacebookF className="fa" />
                            </a>
                            <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                                <FaTwitter className="fa" />
                            </a>
                            <a href="https://www.youtube.in" target="_blank" rel="noreferrer">
                                <FaYoutube className="fa" />
                            </a>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                <FaInstagram className="fa" />
                            </a>
                            <a href="https://www.google.com/gmail" target="_blank" rel="noreferrer">
                                <FaEnvelope className="fa" />
                            </a>
                        </div>
                    </div>
                    <div className="links-support">
                        <div className="useful-links">
                            <h5>Useful links</h5>
                            <Link to="about" smooth={true} duration={1000}>About</Link>
                            <RouterLink to="/">Blog</RouterLink>
                            <Link to="classes" smooth={true} duration={1000}>Classes</Link>
                            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                        </div>
                        <div className="support">
                            <h5>Support</h5>
                            <RouterLink to="/">Login</RouterLink>
                            <RouterLink to="/">My account</RouterLink>
                            <Link to="signup" smooth={true} duration={1000}>Subscribe</Link>
                            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                        </div>
                    </div>
                    <div className="tips-guides">
                        <h5>Tips & Guides</h5>
                        <div className="blog1">
                            <RouterLink to="/">Physical fitness may help prevent depression, anxiety</RouterLink>
                            <span>3 min read &nbsp; &#124; &nbsp; 20 Comment</span>
                        </div>
                        <div className="new1"></div>
                        <div className="blog2">
                            <RouterLink to="/">Fitness: The best exercise to lose belly fat and tone up...</RouterLink>
                            <span>3 min read &nbsp; &#124; &nbsp; 20 Comment</span>
                        </div>
                    </div>
                </div>
                <div className="new2"></div>
                <div className="footer-container2">
                    <p><span>FITNESSClub</span> &copy; All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
