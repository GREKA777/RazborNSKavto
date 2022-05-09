import React from 'react';
import styles from './Auth.module.css'

const Auth = () => {
    return (
        <div>
            <div className={styles.auth}>Регистрация</div>
            <div className={styles.plase}>
                <div>
                    <input type="text" placeholder={"Введите ФИО"} className={styles.input}/>
                </div>
                <div>
                    <input type="text" placeholder={"Введите Email"} className={styles.input}/>
                </div>
                <div>
                    <input type="text" placeholder={"Введите пароль"} className={styles.input}/>
                </div>
                <button className={styles.button}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Auth;