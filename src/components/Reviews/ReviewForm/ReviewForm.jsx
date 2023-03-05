import React from "react";
import styles from './ReviewForm.module.css'
import close from '../../../image/Vector.png'
import clarity from '../../../image/clarity.png'
import RatingStar from "../../RatingStar/RatingStar";


const ReviewForm = (props) => {


    return (
        <div className={styles.background}>
            <form className={styles.form}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h4>Ваш отзыв</h4>
                        <button className={styles.btn} onClick={props.handleCloseForm}>
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
                        <RatingStar />
                    </div>
                    <div className={styles.button}>
                        <button className={styles.submit}>Сохранить</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ReviewForm