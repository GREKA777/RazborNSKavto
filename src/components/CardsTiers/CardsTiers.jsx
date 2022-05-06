import React from 'react';
import styles from './CardsTiers.module.css'
import mainAbout from '../../assets/mainAbout.jpg'
const CardsTiers = ({autoTiers}) => {
    return (
        <div className={styles.cardTiers} key={autoTiers.id || "ID автозапчасти"}>
            <img src={mainAbout} alt="АВТОШИНЫ" className={styles.tiers}/>
            <div className={styles.nameTiers}>{autoTiers.name || "Название"}</div>
            <div className={styles.textTiers}>{autoTiers.description || "Описание"}</div>
            <div className={styles.prise}>{autoTiers.price || "Цена"}</div>
        </div>

    );
};

export default CardsTiers;