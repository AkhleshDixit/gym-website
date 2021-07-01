import React from 'react'
import WeightLifting from '../../../assests/images/img7.jpg';
import Benchpress from '../../../assests/images/img2.jpg';
import Boxing from '../../../assests/images/img22.jpg';
import Dumbell from '../../../assests/images/img13.jpg';
import Kettlebell from '../../../assests/images/img1.jpg';
import styles from './Classes.module.css'

export const Classes = () => {
    return (
        <div className={styles.classes} id="classes">
            <div className={styles.classescontainer1}>
                <p className={styles.fsthead}>OUR CLASSES</p>
                <p className={styles.secondhead}>WHAT WE CAN OFFER</p>
            </div>
            <div className={styles.classescontainer2}>
                <div className={styles.classe}>
                    <div className={styles.picdiv}>
                        <img src={WeightLifting} alt="weight lifting" className={styles.images} />
                    </div>
                    <div className={styles.content} >
                        <p className={styles.head1}>STRENGTH</p>
                        <p className={styles.head2}>WEIGHTLIFTING</p>
                    </div>
                </div>
                <div className={styles.classe}>
                    <div className={styles.picdiv}>
                        <img src={Benchpress} alt="weight lifting" className={styles.images} />
                    </div>
                    <div className={styles.content} >
                        <p className={styles.head1}>CARDIO</p>
                        <p className={styles.head2}>BENCH PRESS</p>
                    </div>
                </div>
                <div className={styles.classe}>
                    <div className={styles.picdiv}>
                        <img src={Kettlebell} alt="weight lifting" className={styles.images} />
                    </div>
                    <div className={styles.content} >
                        <p className={styles.head1}>STRENGTH</p>
                        <p className={styles.head2}>KETTLEBELL POWER</p>
                    </div>
                </div>
                <div className={styles.classe}>
                    <div className={styles.picdiv}>
                        <img src={Dumbell} alt="weight lifting" className={styles.images} />
                    </div>
                    <div className={styles.content} >
                        <p className={styles.head1}>CARDIO</p>
                        <p className={styles.head2}>DUMBELL</p>
                    </div>
                </div>
                <div className={styles.classe}>
                    <div className={styles.picdiv}>
                        <img src={Boxing} alt="weight lifting" className={styles.images} />
                    </div>
                    <div className={styles.content} >
                        <p className={styles.head1}>TRAINING</p>
                        <p className={styles.head2}>BOXING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
