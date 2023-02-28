import React, {useRef} from "react";
import styles from './Reviews.module.css'
import Review from "./Review/Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

    return (
        <section className={styles.reviews}>
            <h2 className={styles.title}>Отзывы наших покупателей</h2>
            <Review />
            <button className={styles.btn}>Добавить отзыв</button>
        </section>
    )
}

export default Reviews