import React, {useState} from "react";
import styles from './LoginToPersonalAccount.module.css'
import go_out from '../../../image/Vector.png'
import Registration_form from "../Registration_form/Registration_form";

const LoginToPersonalAccount = () => {

    const [showRegistrationForm, setShowRegistrationForm] = useState(false)

    const handleClick = () => {
        setShowRegistrationForm(true)
    }


    return (
        <>
            <div className={styles.loginForm}>
            <form className={styles.login}>
                <div className={styles.form}>
                    <h3 className={styles.title}>Вход в личный кабинет</h3>
                    <input className={styles.email} type='email' id='email' name='email'  placeholder='Электронная почта' />
                    <br/>
                    <input className={styles.password} type='password' id='password' name='password' placeholder='Пароль' />
                    <br/>
                    <a href='#' className={styles.remind}>Не помню пароль</a>
                    <br/>
                    <button className={styles.to_come_in} type='submit' >Войти в кабинет</button>
                    <button className={styles.registration} onClick={handleClick} type='button' >Регистрация</button>
                </div>
                <div className={styles.container}>
                    <button className={styles.close}><img src={go_out} alt='close'/></button>
                    <div className={styles.circle}></div>


                </div>
            </form>

        </div>
            {showRegistrationForm && (
            <Registration_form />)}
        </>


    )
}

export default LoginToPersonalAccount