import React, {useState} from "react";
import styles from './Registration_form.module.css'
import close from '../../../image/Vector.png'
import LoginToPersonalAccount from "../LoginToPersonalAccount/LoginToPersonalAccount";
import Radio from "../../Radio/Radio";

const Registration_form = (props) => {

    const [showLoginToPersonalAccount, setShowLoginToPersonalAccount] = useState(false)

    const handleClickOpen = () => setShowLoginToPersonalAccount(true)
    const handleClickClose = () => setShowLoginToPersonalAccount((false))

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
                                <Radio />

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
                            <button className={styles.entrance} onClick={handleClickOpen}>Войти в кабинет</button>
                        </div>
                        <div className={styles.container3}>
                            <button className={styles.close} onClick={props.handleClickClose}><img src={close}/></button>
                            <div className={styles.circle}></div>
                        </div>
                    </form>
                </div>
            </div>
            {showLoginToPersonalAccount && (
                <LoginToPersonalAccount handleClickClose={handleClickClose}/>
            )}
        </>

    )
}


export default Registration_form