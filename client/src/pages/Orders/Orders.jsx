import React from 'react';
import CardsOrder from "../../components/CardsOrder/CardsOrder";
import styles from "../Orders/Orders.module.css";
import Foot from "../../components/Foot/Foot";
import {useSelector} from "react-redux";

const Orders = () => {
    const orders = useSelector(state => state.orderrr.listOrder)
    const order = orders.map(oneOrder => <CardsOrder orderr={oneOrder}/>
    )
    return (
        <div>
            <div className={styles.orderAll}>
                <h2 className={styles.order}>Заказы</h2>
            </div>
            <div className={styles.cards}>
                {order}
            </div>
            <Foot/>
        </div>
    );
};

export default Orders;