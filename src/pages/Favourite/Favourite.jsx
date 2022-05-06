import React from 'react';
import styles from "../Favourite/Favourite.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const Favourite = () => {
    const items = useSelector(state => state.userData.listFavourite).map(onePart => {
            if (onePart.type === "AutoPart") {
                return <CardsAutopart autoPart={onePart}/>
            } else {
                return <CardsTiers autoTiers={onePart}/>
            }
        }
    )
    return (
        <div>
            <div className={styles.favouriteAll}>
                <h2 className={styles.favourite}>Избранное</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <button className={styles.buttonDelete}>Удалить</button>
            <button className={styles.buttonDelete}>Удалить</button>
            <button className={styles.buttonDelete}>Удалить</button>
            <div className={styles.back}>
                <button className={styles.buttonPay}>Удалить всё</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Favourite;