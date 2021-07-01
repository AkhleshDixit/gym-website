import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { FaMobileAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
import Style from './Contact.module.css';

export const Contact = () => {
    return (
        <div className={Style.contact} id="contact">
            <div className={Style.container}>
                <div className={Style.container1}>
                    <div className={Style.title}>
                        <span>CONTACT US</span>
                        <h5>GET IN TOUCH</h5>
                    </div>
                    <div className={Style.details}>
                        <div className={Style.detaildiv}>
                            <div className={Style.icondiv}>
                                <TiLocation className={Style.icon} />
                            </div>
                            <div className={Style.detail}> <p>333 Middle Winchendon Rd, Rindge, NH 03461</p> </div>
                        </div>
                        <div className={Style.detaildiv}>
                            <div className={Style.icondiv}>
                                <FaMobileAlt className={Style.icon} />
                            </div>
                            <div className={Style.detail}><span>125-711-811</span><span className={Style.line}></span><span>125-668-886</span></div>
                        </div>
                        <div className={Style.detaildiv}>
                            <div className={Style.icondiv}>
                                <FaEnvelope className={Style.icon} />
                            </div>
                            <div className={Style.detail}><p>Support.gymcenter@gmail.com</p></div>
                        </div>
                    </div>
                </div>
                <div className={Style.container2}>
                    <form action="" method="GET">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="text" name="website" id="website" placeholder="Website" />
                        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Comment"></textarea>
                        <input type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    )
}
