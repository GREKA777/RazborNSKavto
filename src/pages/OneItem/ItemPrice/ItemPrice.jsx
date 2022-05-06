import React from 'react';
import styles from './ItemPrice.module.css'
const ItemPrice = () => {
    return (
        <div className={styles.itemContent}>
            <div className={styles.itemName}>Капот</div>
            <div className={styles.itemPrice}>25 000 р</div>
        </div>
    );
};

export default ItemPrice;