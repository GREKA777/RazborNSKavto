import React from 'react';
import styles from "../History/History.module.css";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const History = () => {
    const items = useSelector(state => state.userData.listHistory).map(onePart => {
            if (onePart.type === "AutoPart") {
                return <CardsAutopart autoPart={onePart}/>
            } else {
                return <CardsTiers autoTiers={onePart}/>
            }
        }
    )
    return (
        <div>
            <div className={styles.historyAll}>
                <h2 className={styles.history}>История просмотров</h2>
            </div>
            <div className={styles.cards}>
                {items}
            </div>
            <div className={styles.back}>
                <button className={styles.buttonHistory}>Очистить историю просмотров</button>
            </div>
            <Foot/>
        </div>
    );
};

export default History;