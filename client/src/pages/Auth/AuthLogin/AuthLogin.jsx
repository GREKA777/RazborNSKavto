import React, {useState} from 'react';
import styles from './AuthLogin.module.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setIsAuthAC, setUserAC} from "../../../redux/userReducer";
import {MAIN_ROUTE} from "../../../utils/const";
import {login} from "../../../http/userAPI";

const AuthLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const regClick = async () => {
        try {
            const data = await login(email, password)
            dispatch(setUserAC(data))
            dispatch(setIsAuthAC(true))
            navigate(MAIN_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <div>
            <div className={styles.authLogin}>Авторизация</div>
            <div className={styles.plase}>
                <div>
                    <input type="text" placeholder={"Введите Email"} className={styles.input} onChange={(e) =>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="password" placeholder={"Введите пароль"} className={styles.input} onChange={(e) =>{
                        setPassword(e.target.value)
                    }}/>
                </div>
                <button className={styles.button} onClick={regClick}>Войти</button>
            </div>
        </div>
    );
};

export default AuthLogin;