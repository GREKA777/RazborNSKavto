import React from 'react';
import styles from './ItemCharacteristic.module.css'
const ItemCharacteristic = () => {
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
                <div className={styles.indent}>Toyota Mark II JZX90</div>
                <div className={styles.indent}>1993</div>
                <div className={styles.indent}>1JZ-GE</div>
                <div className={styles.indent}>527228 км</div>
                <div className={styles.indent}>178923657123</div>
                <div className={styles.indentO}>Капот без шпатлевки, пробег соответствует, есть пару царапин и одна небольшая вмятина</div>
            </div>
        </div>
            <button className={styles.buttonK}>В корзину</button>
            <button className={styles.buttonF}>В избранное</button>
        </div>
    );
};

export default ItemCharacteristic;