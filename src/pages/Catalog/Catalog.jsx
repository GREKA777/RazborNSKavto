import React from 'react';
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import Foot from "../../components/Foot/Foot";
import styles from './Catalog.module.css'
import {useDispatch, useSelector} from "react-redux";
import CardsAutopart from "../../components/CardsAutopart/CardsAutopart";
import {addAutopartAC} from "../../redux/catalogReducer";

const Catalog = () => {
    const dispatch = useDispatch()
    const autoParts = useSelector(state => state.catalog.listAutopart)
    const part = autoParts.map(onePart => <CardsAutopart autoPart={onePart}/>)
    return (
        <div>
            <CatalogFilter/>
            <div className={styles.cards}>
                {part}
            </div>
            <div className={styles.cardsbutton}>
                <button className={styles.buttonActive} onClick={() => dispatch(addAutopartAC())}>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>
                <button className={styles.button}>4</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Catalog;