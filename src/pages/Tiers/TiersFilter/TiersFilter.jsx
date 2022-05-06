import React from 'react';
import styles from './TiersFilter.module.css';
import CardsTiers from "../../../components/CardsTiers/CardsTiers";

const TiersFilter = () => {
    return (
        <div className={styles.mar}>
            <div className={styles.tiersContent}>
                <h2 className={styles.tiersName}>Автошины</h2>
                <div>
                    <input type="text" placeholder={"Название шин или их номер"} className={styles.searchName}/>
                    <button className={styles.tiersButton}>Поиск</button>
                </div>
                <div>
                    <input type="text" placeholder={"Ширина"} className={styles.searchWidth}/>
                    <input type="text" placeholder={"Профиль"} className={styles.searchProfile}/>
                    <input type="text" placeholder={"Диаметр"} className={styles.searchDiameter}/>
                    <input type="text" placeholder={"Кол-во"} className={styles.searchQuantity}/>
                </div>
            </div>
        </div>

    );
};

export default TiersFilter;