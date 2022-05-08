import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Profile.module.css';
import ya from '../../assets/ya.png'
import {BASKET_ROUTE, FAVOURITE_ROUTE, HISTORY_ROUTE, ORDERS_ROUTE} from "../../utils/const";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const Profile = () => {
    const users = useSelector(state => state.userData.user)
    return (
        <div>
            <div className={styles.profileAll}>
                <h2 className={styles.profile}>Профиль № {users.id}</h2>
            </div>
            <div className={styles.profileBody}>
                <img src={ya} alt="Фото профиля" className={styles.photoProfile}/>
                <div className={styles.profileBodyAll}>
                    <div className={styles.profileBodyText}>
                        <p>ФИО:</p>
                        <p>Почта:</p>
                        <p>Телефон:</p>
                        <p>Роль:</p>
                        <button className={styles.photoButton}>Изменить фото профиля</button>
                    </div>
                    <div className={styles.profileBodyFact}>
                        <p>{users.FIO}</p>
                        <p>{users.email}</p>
                        <p>{users.phone}</p>
                        <p>{users.role}</p>
                        <button className={styles.editButton}>Редактировать профиль</button>
                    </div>
                    <div className={styles.buttonsProfile}>
                        <NavLink to={BASKET_ROUTE}>
                            <button className={styles.buttonsProfilee}>Корзина</button>
                        </NavLink>
                        <NavLink to={FAVOURITE_ROUTE}>
                            <button className={styles.buttonsProfilee}>Избранное</button>
                        </NavLink>
                        <NavLink to={HISTORY_ROUTE}>
                            <button className={styles.buttonsProfilee}>История просмотров</button>
                        </NavLink>
                        <NavLink to={ORDERS_ROUTE}>
                            <button className={styles.buttonsProfilee}>Заказы</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Foot/>
        </div>
    );
};

export default Profile;