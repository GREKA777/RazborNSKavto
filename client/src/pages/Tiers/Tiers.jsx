import React, {useEffect} from 'react';
import TiersFilter from "./TiersFilter/TiersFilter";
import Foot from "../../components/Foot/Foot";
import styles from './Tiers.module.css'
import CardsTiers from "../../components/CardsTiers/CardsTiers";
import {setTiersAC} from "../../redux/catalogReducer";
import {useDispatch, useSelector} from "react-redux";
import {fetchTiers} from "../../http/tiersAPI";



const Tiers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchTiers(1, 5).then(data => dispatch(setTiersAC(data.rows)))
    }, [])
    const autoTiers = useSelector(state => state.catalog.listTiers)
    const tier = autoTiers.map(oneTiers => <CardsTiers autoTiers={oneTiers}/>)
    return (
        <div>
            <TiersFilter/>
            <div className={styles.cards}>
                {tier}
            </div>
            <div className={styles.cardsbutton}>
                <button className={styles.buttonActive}>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>
                <button className={styles.button}>4</button>
            </div>
            <Foot/>
        </div>
    );
};

export default Tiers;