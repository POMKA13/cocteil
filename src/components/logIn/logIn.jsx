import React from 'react';
import styles from './logIn.module.css'
import basket from '../../image/basket.svg'
import heart from '../../image/heart.svg'
import eye from '../../image/clarity_eye-line.svg'

const LogIn = (props) => {
    return (
        <div className={styles.logIn}>
            <div className={styles.logIn_header}>
                <div className={styles.user}>
                    {/*<img src="" alt="user"/>*/}
                </div>
                <button className={styles.btn}>Войти</button>
                {/*<a className={styles.btn} href="#">Войти</a>*/}
                <div className={styles.basket}>
                    <img src={basket} alt="basket"/>
                    <a href="#">Корзина</a>
                </div>
            </div>
            <div className={styles.logIn_footer}>
                <div className={styles.favorites}>
                    <img src={heart} alt="favorites"/>
                    <a href="#">Избранное</a>
                </div>
                <div className={styles.viewed}>
                    <img src={eye} alt="viewed"/>
                    <a href="#">Просмотренные</a>
                </div>
            </div>
        </div>
    );
};

export default LogIn;