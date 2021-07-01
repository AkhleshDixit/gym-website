import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <div className="home" id="home">
            <div className="home-container">
                <p className="head1">SHAPE YOUR BODY</p>
                <p className="head2">BE <span className="home-span">STRONG</span></p>
                <p className="head2">TRAINING HARD</p>
                <Link to="/" className="get-info-btn">GET INFO</Link>
            </div>
        </div>
    )
}
