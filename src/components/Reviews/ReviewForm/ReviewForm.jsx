import React, {useState} from "react";
import styles from './ReviewForm.module.css'
import close from '../../../image/Vector.png'
import {Rating} from "@mui/material";
import clarity from '../../../image/clarity.png'
import arrow from '../../../image/Arrow10.png'


const ReviewForm = () => {
    const [value, setValue] = useState(null)

    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4>Ваш отзыв</h4>
                    <button className={styles.btn}>
                        <img src={close}/>
                    </button>
                </div>
                <div>
                    <input className={styles.input} type='text' placeholder='Фамилия и имя'/>
                </div>
                <div className={styles.review}>
                    <textarea placeholder='Отзыв'/>
                    <label className={styles.file}>
                        <input type='file'/>
                        <span className={styles.file_text}>Прикрепить фото</span>
                        <span><img src={clarity}/></span>
                    </label>
                </div>
                <div className={styles.star}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        style={{color: '#514A7E'}}
                        size="small"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    {/*<Rating name="read-only" value={value} readOnly />*/}
                </div>
                <div className={styles.button}>
                    <button className={styles.submit}>Сохранить</button>
                </div>
            </div>
        </form>
    )
}

export default ReviewForm