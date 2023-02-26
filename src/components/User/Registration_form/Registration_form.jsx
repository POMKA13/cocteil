import React, {useState} from "react";
import styles from './Registration_form.module.css'
import close from '../../../image/Vector.png'
import LoginToPersonalAccount from "../LoginToPersonalAccount/LoginToPersonalAccount";

const Registration_form = () => {

    const [showLoginToPersonalAccount, setShowLoginToPersonalAccount] = useState(false)

    const handleClick = () => {
        setShowLoginToPersonalAccount(true)
    }
    return (
        <>
            <div className={styles.registration_form}>
                <div className={styles.container}>
                    <form className={styles.form}>
                        <div className={styles.container1}>
                            <div className={styles.form_left}>
                                <h3 className={styles.title}>Регистрация</h3>
                                <input className={styles.input} type='text' placeholder='ФИО'/>
                                <br/>
                                <input className={styles.input} type='text' placeholder='Контактный телефон'/>
                                <br/>
                                <input className={styles.input} type='text' placeholder='Индекс'/>
                                <br/>
                                <label>
                                    <input type='radio'/>
                                    <span className={styles.radio_button}></span>
                                </label>
                                <span className={styles.data}>Даю согласие на обработку персональных данных</span>
                            </div>
                            <div className={styles.form_rigth}>
                                <input className={styles.input} type='text' placeholder='Ваш полный адрес'/>
                                <br/>
                                <input className={styles.input} type='text' placeholder='Электронная почта'/>
                                <br/>
                                <input className={styles.input} type='text' placeholder='Комментарий'/>
                            </div>
                        </div>
                        <div className={styles.container2}>
                            <button className={styles.submit} type='submit'>Отправить</button>
                            <button className={styles.entrance} onClick={handleClick}>Войти в кабинет</button>
                        </div>
                        <div className={styles.container3}>
                            <button className={styles.close}><img src={close}/></button>
                            <div className={styles.circle}></div>
                        </div>
                    </form>
                </div>
            </div>
            {showLoginToPersonalAccount && (
                <LoginToPersonalAccount/>
            )}
        </>

    )
}


export default Registration_form