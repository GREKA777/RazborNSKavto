import React from 'react';
import styles from "../CardsOrder/CardsOrder.module.css";
import mainAbout from "../../assets/mainAbout.jpg";

const CardsOrder = ({orderr}) => {
    return (
        <div>
            <div className={styles.cardOrders} key={orderr.id}>
                <div className={styles.nameOrder}>Заказ от {orderr.data}</div>
                <div className={styles.textOrder}>{orderr.num}</div>
                <div className={styles.nameOrder}>Статус доставки</div>
                <div className={styles.textOrder}>{orderr.status}</div>
                <img src={mainAbout} alt="АВТОЗАПЧАСТЬ" className={styles.order}/>
            </div>
        </div>
    );
};

export default CardsOrder;