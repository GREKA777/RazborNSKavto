import React from 'react';
import styles from './Foot.module.css'
import logo from "../../assets/logo.png";
import city from "../../assets/city.png";
import phone from "../../assets/phone.png";
import {NavLink} from "react-router-dom";
import {ABOUT_US_ROUTE, CATALOG_ROUTE, TIRES_ROUTE} from "../../utils/const";

const Foot = () => {
    return (
        <div className={styles.allfooter}>
            <div className={styles.line}></div>
        <footer className={styles.footer}>
            <div className={styles.footBlok1}>
                <img src={logo} alt="RazborNSKavto"/>
                <div className={styles.footCity}>
                    <img src={city} alt="Город" className={styles.footCityPNG}/>
                    <p className={styles.footText}>г. Новосибирск</p>
                </div>
                <div className={styles.footPhone}>
                    <img src={phone} alt="Телефон" className={styles.footPhonePNG}/>
                    <p className={styles.footText}>+7 923 777 06 08</p>
                </div>
            </div>
            <div className={styles.footBlok2}>
                <h4 className={styles.footName}>Информация</h4>

                <NavLink className={styles.footLink} to={ABOUT_US_ROUTE}>О нас</NavLink>

                <NavLink className={styles.footLink} to={CATALOG_ROUTE}>Каталог</NavLink>

                <NavLink className={styles.footLink} to={TIRES_ROUTE}>Шины</NavLink>

            </div>
            <div className={styles.footBlok3}>
                <h4 className={styles.footName}>ООО "RazborNSKavto"</h4>
                <p className={styles.footText}>ИНН 540821892800</p>
                <p className={styles.footText}>ОГРН 102457582883592</p>


                <NavLink className={styles.footLink} to={ABOUT_US_ROUTE}>Политика конфиденциальности</NavLink>


                <NavLink className={styles.footLink} to={ABOUT_US_ROUTE}>Пользовательское соглашение</NavLink>


            </div>
        </footer>
        </div>
    );
};

export default Foot;