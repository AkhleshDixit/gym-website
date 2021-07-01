import React from 'react'
import { Link } from 'react-router-dom';
import Styles from './Services.module.css';

export const Services = () => {
    return (
        <div className={Styles.services} id="services">
            <div className={Styles.container1}>
                <span>OUR SERVICES</span>
                <h5>CHOOSE YOUR PRICING SERVICE</h5>
            </div>
            <div className={Styles.container2}>
                <div className={Styles.child}>
                    <h3>Class drop-in</h3>
                    <div className={Styles.price}>
                        <h2> &#36; 39.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <Link to="/enroll">ENROLL NOW</Link>
                </div>
                <div className={Styles.child}>
                    <h3>12 Month unlimited</h3>
                    <div className={Styles.price}>
                        <h2> &#36; 99.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <Link to="/enroll">ENROLL NOW</Link>
                </div>
                <div className={Styles.child}>
                    <h3>6 Month unlimited</h3>
                    <div className={Styles.price}>
                        <h2> &#36; 59.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <Link to="/enroll">ENROLL NOW</Link>
                </div>
            </div>

        </div>
    )
}
