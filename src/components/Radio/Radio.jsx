import React from 'react';
import styles from "./Radio.module.css";

const Radio = () => {
    return (
            <label>
                <input type='radio'/>
                <span className={styles.radio_button}></span>
            </label>
    );
};

export default Radio;