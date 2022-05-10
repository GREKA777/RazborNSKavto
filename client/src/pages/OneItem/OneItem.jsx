import React, {useEffect} from 'react';
import ItemPrice from "./ItemPrice/ItemPrice";
import ItemCharacteristic from "./ItemCharacteristic/ItemCharacteristic";
import mainAbout from '../../assets/mainAbout.jpg'
import styles from './OneItem.module.css'
import Foot from "../../components/Foot/Foot";
import {useDispatch} from "react-redux";
import {setAutopartAC} from "../../redux/catalogReducer";
import {fetchAutoPart} from "../../http/autoPartAPI";
import {useParams} from "react-router-dom";

const OneItem = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     fetchAutoPart({id}).then(data => dispatch(setAutopartAC(data.rows)))
    // }, [])
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <ItemPrice/>
            <ItemCharacteristic/>
            <div className={styles.photoAll}>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photo}/>
                <div className={styles.photoSmallAll}>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photoSmall}/>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photoSmall}/>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photoSmall}/>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photoSmall}/>
                <img src={mainAbout} alt="Фото автозапчасти" className={styles.photoSmall}/>
            </div>
            </div>
            <Foot/>
        </div>
    );
};

export default OneItem;