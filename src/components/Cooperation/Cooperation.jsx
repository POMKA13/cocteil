import React from 'react';
import styles from './Cooperation.module.css'
import cog from '../../image/clarity_cog.png'
import list from '../../image/list-line.png'
import employee from '../../image/employee-group-line.png'
import coin from '../../image/coin-bag-line.png'

const Cooperation = () => {
    return (
        <section className={styles.cooperation}>
            <h2 className={styles.title}>Сотрудничество с нами</h2>
            <p className={styles.text}>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых
                партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и
                интересны с коммерческой точки зрения. </p>
            <div className={styles.containerUp}>
                <div className={styles.box}>
                    <h4>Становитесь <br/> партнёром</h4>
                    <p>Регистрируйтесь и <br/> переходите в свой кабинет</p>
                </div>
                <div className={styles.box}>
                    <h4>Рекламируйте <br/> товары</h4>
                    <p>Рекламируйте наши товары <br/> на форумах, сайтах, в социальных сетях</p>
                </div>
                <div className={styles.box}>
                    <h4>Приводите <br/> покупателей</h4>
                    <p>Приводите покупателей на <br/> наш сайт по уникальной ссылке</p>
                </div>
                <div className={styles.box}>
                    <h4>Получайте <br/> бонусы</h4>
                    <p>Копите бонусы от каждого <br/> оплаченного заказа</p>
                </div>
            </div>
            <h2 className={styles.subTitle}>Это выгодно. Какие преимущества?</h2>
            <div className={styles.containerDown}>
                <div className={styles.boxDown}>
                    <img src={cog} alt="cog"/>
                    <p>Автоматизация процессов</p>
                </div>
                <div className={styles.boxDown}>
                    <img src={list} alt="list"/>
                    <p>Пополнение ассортимента</p>
                </div>
                <div className={styles.boxDown}>
                    <img src={employee} alt="employee"/>
                    <p>Поддержка и обучение</p>
                </div>
                <div className={styles.boxDown}>
                    <img src={coin} alt="coin"/>
                    <p>Бонусы за новых клиентов</p>
                </div>
            </div>
        </section>
    )
}

export default Cooperation