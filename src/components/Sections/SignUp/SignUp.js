import React from 'react'
import { Link } from 'react-router-dom';
import style from './SignUp.module.css';

export const SignUp = () => {
    return (
        <div className={style.signup} id="signup">
            <div className={style.signupcontainer}>
                <p>TAKE MEMBERSHIP NOW TO GET MORE DEALS</p>
                <span>WHERE HEALTH, BEAUTY AND FITNESS MEET</span>
                <Link to="/signup">MEMBERSHIP</Link>
            </div>
        </div>
    )
}
