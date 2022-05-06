import React from 'react';
import styles from './AboutConnect.module.css';

const AboutConnect = () => {
    return (
        <div className={styles.all}>
            <div className={styles.connectContent}>
                <h2 className={styles.connectName}>Обратная связь</h2>
                <h2 className={styles.connectText}>Вы можете задать нам вопрос, либо поделиться вашими предложениями!</h2>
                <div>
                    <input type="text" placeholder={"Ваше имя"} className={styles.name}/>
                    <input type="text" placeholder={"Ваше E-mail"} className={styles.email}/>
                    <input type="text" placeholder={"Тема"} className={styles.tema}/>
                </div>
                <div>
                    <textarea type="text" placeholder={"Текст вопроса/предложения"} className={styles.Text}/>
                </div>
                <button className={styles.connectButton}>Отправить</button>
            </div>
        </div>
    );
};

export default AboutConnect;