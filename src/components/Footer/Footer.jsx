import React from 'react';
import styles from './Footer.module.css'
import tg from '../../image/tg.png'
import instagram from '../../image/instagram.png'
import mail from '../../image/mail.png'
import call from '../../image/sk.png'
import phone from '../../image/carbon_phone-voice.png'
import time from '../../image/carbon_time.png'
import logo from '../../image/logoneon.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h4>Информация</h4>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Возврат</a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Партнёрам</a></li>
                    <li><a href="#">Способы оплаты</a></li>
                    <li><a href="#">Как сделать заказ?</a></li>
                </ul>
            </div>
            <div className={styles.container}>
                <h4>Мой кабинет</h4>
                <ul>
                    <li><a href="#">Мои заказы</a></li>
                    <li><a href="#">Мои адреса</a></li>
                    <li><a href="#">Мои скидки</a></li>
                    <li><a href="#">Моя информация</a></li>
                </ul>
            </div>
            <div className={styles.container}>
                <h4>Контактная информация</h4>
                <p>ИП Вишневский Иван Сергеевич <br/>
                    государственная регистрация №690867884 от 31.07.2020г. <br/>
                    Защита прав потребителей +380959990755</p>
            </div>
            <div className={styles.container}>
                <h4>Соц. сети</h4>
                <ul className={styles.imageBox}>
                    <li><a href="#"><img src={tg} alt="Telegram"/></a></li>
                    <li><a href="#"><img src={instagram} alt="Instagram"/></a></li>
                    <li><a href="#"><img src={mail} alt="Mail"/></a></li>
                    <li><a href="#"><img src={call} alt="Call"/></a></li>
                </ul>
                <ul className={styles.box}>
                    <li><img src={phone} alt="Call"/>+375255990755</li>
                    <li><img src={time} alt="around the clock, seven days a week"/>круглосуточно, без выходных</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <a href="#">
                    <img src={logo} alt="Cocteil"/>
                </a>
            </div>
        </div>
    )
}

export default Footer