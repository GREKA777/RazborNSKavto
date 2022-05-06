import React from 'react';
import styles from './CatalogFilter.module.css';
import CardsAutopart from "../../../components/CardsAutopart/CardsAutopart";

const CatalogFilter = () => {
    return (
        <div className={styles.mar}>
            <div className={styles.catalogContent}>
            <h2 className={styles.catalogName}>Каталог</h2>
            <div>
                <input type="text" placeholder={"Название запчасти или её номер"} className={styles.searchName}/>
                <button className={styles.catalogButton}>Поиск</button>
            </div>
            <div>
                <input type="text" placeholder={"Марка и модель авто"} className={styles.searchModel}/>
                <input type="text" placeholder={"Вид запчасти"} className={styles.searchView}/>
            </div>
            </div>
        </div>

    );
};

export default CatalogFilter;