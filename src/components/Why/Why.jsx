import React from "react";
import arrow from '../../image/Arrow10.png'
import message from '../../image/clarity_chat-bubble-line.png'
import styles from './Why.module.css'
import {Link} from "react-router-dom";

const Why = () => {
    return (
        <section className={styles.why}>
            <h2 className={styles.title}>Почему выбирают нас?</h2>
            <div className={styles.container_up}>
                <div className={styles.box_1}>
                    <span className={styles.info}>Скидки постоянным <br/> клиентам от 5%</span>
                    <span className={styles.span_1}></span>
                </div>
                <div className={styles.box_2}>
                    <span className={styles.info}>Предлагаем самые <br/> выгодные цены</span>
                </div>
                <div className={styles.box_3}>
                    <span className={styles.info}>Наши покупатели всегда <br/> остаются довольны</span>
                    <span className={styles.span_2}></span>
                </div>
                <div className={styles.box_4}>
                    <span className={styles.info}>Ширикий ассортимент <br/> товаров для всей семьи</span>
                </div>
            </div>
            <div className={styles.container_down}>
                <div className={styles.box_5}>
                    <Link to='/Greetings#greetings' className={styles.up}>
                        <img src={arrow}/>
                    </Link>
                </div>
                <div className={styles.box_6}>
                    <div className={styles.info}>Возможность доставки в <br/> любой город страны</div>
                    <span className={styles.span_4}></span>
                </div>
                <div className={styles.box_7}>
                    <div className={styles.info}>Пункты выдачи заказов <br/> рядом с домом</div>
                    <span className={styles.span_5}></span>
                </div>
                <div className={styles.box_8}>
                    <button className={styles.message}>
                        <img src={message}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Why