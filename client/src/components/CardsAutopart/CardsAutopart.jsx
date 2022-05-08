import React from 'react';
import styles from './CardsAutopart.module.css'
import mainAbout from '../../assets/mainAbout.jpg'
const CardsAutopart = ({autoPart}) => {
    return (
        <div className={styles.cardAutopart} key={autoPart.id || "ID автозапчасти"}>
            <img src={mainAbout} alt="АВТОЗАПЧАСТЬ" className={styles.autoparts}/>
            <div className={styles.nameAutoparts}>{autoPart.name || "Название"}</div>
            <div className={styles.textAutoparts}>{autoPart.description || "Описание"}</div>
            <div className={styles.prise}>{autoPart.price || "Цена"}</div>
        </div>
    );
};

export default CardsAutopart;