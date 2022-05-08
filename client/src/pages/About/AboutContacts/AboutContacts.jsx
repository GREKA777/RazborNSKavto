import React from 'react';
import styles from './AboutContacts.module.css'
import map from '../../../assets/map.png'
const AboutContacts = () => {
    return (
        <div className={styles.allContacts}>
            <div className={styles.aboutContactsHead}>Контактная информация</div>
            <div className={styles.aboutContactsTextAll}>
            <div>
            <div className={styles.aboutContactsText}>Номер мобильного телефона:</div>
            <div className={styles.aboutContactsText}>WhatsApp, Telegram:</div>
            <div className={styles.aboutContactsText}>Почта:</div>
            <div className={styles.aboutContactsText}>Часы работы:</div>
            <div className={styles.aboutContactsText}>Офис в Новосибирске:</div>
            </div>
            <div>
                <div className={styles.aboutContactsTextt}>+7 923 777 06 08</div>
                <div className={styles.aboutContactsTextt}>+7 923 777 06 08</div>
                <div className={styles.aboutContactsTextt}>egorka.gre4ko2015@gmail.com</div>
                <div className={styles.aboutContactsTextt}>пн-пт: 14:00-23:00, сб-вс: 15:00-21:00</div>
                <div className={styles.aboutContactsTextt}>г. Новосибирск, р-н Советский, ул. Иванова, д. 32, оф. 136</div>
            </div>
            </div>
            <div>
                <img src={map} alt="Местоположение на карте" className={styles.map}/>
            </div>
        </div>
    );
};

export default AboutContacts;