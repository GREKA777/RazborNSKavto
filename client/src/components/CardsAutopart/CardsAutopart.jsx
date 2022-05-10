import React from 'react';
import styles from './CardsAutopart.module.css'
import mainAbout from '../../assets/mainAbout.jpg'
import {NavLink} from "react-router-dom";
import {ONE_ITEM_ROUTE} from "../../utils/const";
const CardsAutopart = ({autoPart}) => {
    return (
        <NavLink className={styles.cardAutopart} to={ONE_ITEM_ROUTE + autoPart.id}  key={autoPart.id || "ID автозапчасти"}>
            <img src={mainAbout} alt="АВТОЗАПЧАСТЬ" className={styles.autoparts}/>
            <div className={styles.nameAutoparts}>{autoPart.name || "Название"}</div>
            <div className={styles.textAutoparts}>{autoPart.car || "Автомобиль"}</div>
            <div className={styles.textAutoparts}>{autoPart.engine || "Двигатель"}</div>
            <div className={styles.textAutoparts}>{autoPart.year || "Год"}</div>
            <div className={styles.textAutoparts}>{autoPart.run || "Пробег"}</div>
            <div className={styles.prise}>{autoPart.price || "Цена"}p</div>
        </NavLink>
    );
};

export default CardsAutopart;