import React from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT_US_ROUTE, CATALOG_ROUTE, MAIN_ROUTE, TIRES_ROUTE, PROFILE_ROUTE, BASKET_ROUTE} from "../../utils/const";
import styles from './Head.module.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import basket from '../../assets/basket.png'

const Head = () => {

    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={TIRES_ROUTE}><button className={styles.button}>Шины</button></NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={CATALOG_ROUTE}><button className={styles.button}>Каталог</button></NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink className={styles.headButton} to={ABOUT_US_ROUTE}><button className={styles.button}>О нас</button></NavLink>
                </li>
            </ul>
            <NavLink className={styles.headButton} to={MAIN_ROUTE}><img src={logo} alt="RazborNSKavto"/></NavLink>
            <input type="text" placeholder={"Поиск"} className={styles.search}/>
            <NavLink className={styles.profileButton} to={PROFILE_ROUTE}><img src={profile} alt="Профиль" className={styles.profileLogo}/></NavLink>
            <div>
            <div><button className={styles.buttonGo}>Вход</button></div>
            <div><button className={styles.buttonReg}>Регистрация</button></div>
            </div>
            <NavLink className={styles.basketButton} to={BASKET_ROUTE}><img src={basket} alt="Корзина" className={styles.basketLogo}/></NavLink>
        </header>
    );
};

export default Head;