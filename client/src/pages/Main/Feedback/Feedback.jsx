import React from 'react';
import styles from './Feedback.module.css'
import {useSelector} from "react-redux";

const Feedback = () => {
    const feedbacks = useSelector(state => state.feedbackk.listFeedback)
    return (
        <div className={styles.backg}>
            <h1 className={styles.feedback}>Отзывы</h1>
            <div className={styles.maindivfeedback}>
                <div className={styles.feedbackpeopleleft} key={feedbacks[0].id}>
                    <h2 className={styles.nameFeedbackB}>{feedbacks[0].name}</h2>
                    <p className={styles.textFeedbackV}>{feedbacks[0].text}</p>
                </div>
                <button className={styles.buttonLeft}>ᐸ</button>
                <div className={styles.feedbackpeoplemain} key={feedbacks[1].id}>
                    <h2 className={styles.nameFeedback}>{feedbacks[1].name}</h2>
                    <p className={styles.textFeedback}>{feedbacks[1].text}</p>
                </div>
                <button className={styles.buttonRight}>ᐳ</button>
                <div className={styles.feedbackpeopleright} key={feedbacks[2].id}>
                    <h2 className={styles.nameFeedbackB}>{feedbacks[2].name}</h2>
                    <p className={styles.textFeedbackS}>{feedbacks[2].text}</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;