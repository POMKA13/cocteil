import React from 'react';
import styles from './InvitationToCooperation.module.css'
import Radio from "../Radio/Radio";

const InvitationToCooperation = () => {
    return (
        <section className={styles.cooperation}>
            <div className={styles.container}>
                <form className={styles.form} action="">
                    <h2>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</h2>
                    <input className={styles.input} type="text" placeholder='Ваше имя'/>
                    <br/>
                    <input className={styles.input} type="text" placeholder='Номер телефона'/>
                    <br/>
                    <input className={styles.input} type="text" placeholder='Электронная почта'/>
                    <br/>
                    <Radio />
                    <br/>
                    <button className={styles.button}>Отправить</button>
                </form>
            </div>
            <div className={styles.circle}></div>
            <div className={styles.circleBg}></div>
        </section>
    )
}

export default InvitationToCooperation