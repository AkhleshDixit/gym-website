import React from 'react'
import { Link } from 'react-router-dom';
import Pic from '../../../assests/images/img30.jpg';
import Css from './Team.module.css';

export const Team = () => {
    return (
        <div className={Css.team} id="team">
            <div className={Css.teamcontainer}>
                <div className={Css.titlecontainer}>
                    <div className={Css.titlediv}>
                        <span>OUR TEAM</span>
                        <h5>TRAIN WITH EXPERTS</h5>
                    </div>
                    <div className={Css.appointmentbtn}>
                        <Link to="/">APPOINTMENT</Link>
                    </div>
                </div>
                <div className={Css.slidercontainer}>
                    <div className={Css.sliderdiv}>
                        <div className={Css.slider}>
                            <img src={Pic} alt="experts" />
                        </div>
                        <div className={Css.slider}>
                            <img src={Pic} alt="experts" />
                        </div>
                        <div className={Css.slider}>
                            <img src={Pic} alt="experts" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
