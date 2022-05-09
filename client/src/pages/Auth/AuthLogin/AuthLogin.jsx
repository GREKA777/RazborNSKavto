import React from 'react';
import styles from './AuthLogin.module.css'

const AuthLogin = () => {
    return (
        <div>
            <div className={styles.authLogin}>Авторизация</div>
            <div className={styles.plase}>
                <div>
                    <input type="text" placeholder={"Введите Email"} className={styles.input}/>
                </div>
                <div>
                    <input type="text" placeholder={"Введите пароль"} className={styles.input}/>
                </div>
                <button className={styles.button}>Войти</button>
            </div>
        </div>
    );
};

export default AuthLogin;