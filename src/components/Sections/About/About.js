import React from 'react';
import { CgGym } from 'react-icons/cg'
import { GiHeartBeats } from 'react-icons/gi'
import { GiMilkCarton } from 'react-icons/gi'
import { GiUnicycle } from 'react-icons/gi'
import './About.css';

export const About = () => {
    return (
        <div className="about" id="about">
            <div className="container-child1">
                <p className="heading1">WHY CHOOSE US?</p>
                <p className="heading2">PUSH YOUR LIMITS FORWARD</p>
            </div>
            <div className="container-child2">
                <div className="child">
                    <GiUnicycle className="icons" />
                    <p className="first-head">Modern equipment</p>
                    <p className="cont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ut accusamus. amet consectetur adipisicing elit</p>
                </div>
                <div className="child">
                    <GiMilkCarton className="icons" />
                    <p className="first-head">Healthy nutrition plan</p>
                    <p className="cont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ut accusamus. amet consectetur adipisicing elit</p>
                </div>
                <div className="child">
                    <CgGym className="icons" />
                    <p className="first-head">Professional training plan</p>
                    <p className="cont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ut accusamus. amet consectetur adipisicing elit</p>
                </div>
                <div className="child">
                    <GiHeartBeats className="icons" />
                    <p className="first-head">Unique to your needs</p>
                    <p className="cont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ut accusamus. amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    )
}
