import React, { useState } from 'react'
import { MenuItems } from './MenuItems';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({ color, pad }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        setClicked(!clicked);

    }
    return (
        <>
            <div className="navbar">
                <div className="nav-container" style={{ background: color, padding: pad }} >
                    <div className="logo">FITNESS<span>Club</span></div>
                    <div className="hamburger" onClick={handleClick}><i className={clicked ? "fas fa-times" : "fas fa-bars"}></i></div>
                    <div className={clicked ? "menu-items" : "menu-items close"}>
                        {
                            MenuItems.map((Item, index) => {
                                return <Link key={index} to={Item.url} smooth={true} duration={1000} onClick={() => { setClicked(!clicked) }}>{Item.title}</Link>;
                            })
                        }
                        <RouterLink to="/signin" className="nav-btn">SIGN IN</RouterLink>
                    </div>
                </div>
            </div>
        </>
    )
}

