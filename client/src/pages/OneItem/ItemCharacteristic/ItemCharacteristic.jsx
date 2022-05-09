import React from 'react';
import styles from './ItemCharacteristic.module.css'
const ItemCharacteristic = ({autoPart}) => {
    return ( <div>
        <div className={styles.contentCharacteristic}>
            <div className={styles.characteristic}>
            <div>Автомобиль:</div>
            <div>Год:</div>
            <div>Двигатель:</div>
            <div>Пробег:</div>
            <div>Номер:</div>
            <div>Описание:</div>
            </div>
            <div className={styles.textCharacteristic}>
                <div className={styles.indent}>{autoPart.car || "Автомобиль"}</div>
                <div className={styles.indent}>{autoPart.year || "Год"}</div>
                <div className={styles.indent}>{autoPart.engine || "Двигатель"}</div>
                <div className={styles.indent}>{autoPart.run || "Пробег"}</div>
                <div className={styles.indent}>{autoPart.num || "Номер"}</div>
                <div className={styles.indentO}>{autoPart.description || "Описание"}</div>
            </div>
        </div>
            <button className={styles.buttonK}>В корзину</button>
            <button className={styles.buttonF}>В избранное</button>
        </div>
    );
};

export default ItemCharacteristic;