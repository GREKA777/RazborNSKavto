import React from 'react';
import styles from './CardsTiers.module.css'
import mainAbout from '../../assets/mainAbout.jpg'
import {NavLink} from "react-router-dom";
import {ONE_ITEM_ROUTE} from "../../utils/const";
const CardsTiers = ({autoTiers}) => {
    return (
        <NavLink className={styles.cardTiers} to={ONE_ITEM_ROUTE} key={autoTiers.id || "ID автозапчасти"}>
            <img src={mainAbout} alt="АВТОШИНЫ" className={styles.tiers}/>
            <div className={styles.nameTiers}>{autoTiers.name || "Название"}</div>
            <div className={styles.textTiers}>Ширина: {autoTiers.width || "Ширина"}</div>
            <div className={styles.textTiers}>Профиль: {autoTiers.profile || "Профиль"}</div>
            <div className={styles.textTiers}>Диаметр: {autoTiers.diameter || "Диаметр"}</div>
            <div className={styles.textTiers}>Количество: {autoTiers.count || "Количество"}</div>
            <div className={styles.prise}>{autoTiers.price || "Цена"}р</div>
        </NavLink>

    );
};

export default CardsTiers;