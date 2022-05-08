import React from 'react';
import styles from "../Basket/Basket.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const Basket = () => {
    const items = useSelector(state => state.userData.listBasket).map(onePart => {
        if (onePart.type === "AutoPart") {
            return <CardsAutopart autoPart={onePart}/>
        } else {
            return <CardsTiers autoTiers={onePart}/>
        }
    }
    )
    return (
        <div>
            <div className={styles.basketAll}>
                <h2 className={styles.basket}>Корзина</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <button className={styles.buttonDelete}>Удалить</button>
            <button className={styles.buttonDelete}>Удалить</button>
            <button className={styles.buttonDelete}>Удалить</button>
            <div className={styles.back}>
                <div className={styles.priceDone}>
                    <div className={styles.donePrice}>Итого:</div>
                    <div className={styles.donePriceDone}>37000</div>
                </div>
                <button className={styles.buttonPay}>Оплатить</button>
                <button className={styles.buttonPay}>Удалить всё</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Basket;