import React, {useState} from "react";
import user from '../../image/clarity_avatar-line.png'
import heart from '../../image/clarity_heart-line.png'
import shopping from '../../image/clarity_shopping-bag-line.png'
import styles from './User.module.css'
import LoginToPersonalAccount from "./LoginToPersonalAccount/LoginToPersonalAccount";

const User = () => {
    const [showLoginForm, setShowLoginForm] = useState(false)
    const handleClickOpen = () => setShowLoginForm(true)

    const handleClickClose = () => setShowLoginForm(false)
    return (
        <div className={styles.container}>
            <button className={styles.button} type='button' onClick={handleClickOpen}><img src={user} alt=''/></button>
            <button className={styles.button} type='button'><img src={heart} alt=''/></button>
            <button className={styles.button} type='button'><img src={shopping} alt=''/></button>
            {showLoginForm && (
                <LoginToPersonalAccount handleClickClose={handleClickClose}/>
            )}
        </div>
    )
}

export default User