import React from 'react';
import styles from "./Radio.module.css";

const Radio = () => {
    return (
            <label>
                <input type='radio'/>
                <span className={styles.radio_button}></span>
                <span className={styles.data}>Даю согласие на обработку персональных данных</span>
            </label>
    );
};

export default Radio;