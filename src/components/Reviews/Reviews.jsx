import React, {useState} from "react";
import styles from './Reviews.module.css'
import Review from "./Review/Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewForm from "./ReviewForm/ReviewForm";

const Reviews = () => {
    const [showForm, setShowForm] = useState(false)

    const handleOpenForm = () => setShowForm(true)
    const handleCloseForm = () => setShowForm(false)

    return (
        <section className={styles.reviews}>
            <h2 className={styles.title}>Отзывы наших покупателей</h2>
            <Review />
            <button className={styles.btn} onClick={handleOpenForm}>Добавить отзыв</button>
            {showForm && (
                <ReviewForm handleCloseForm={handleCloseForm} />
            )}
        </section>
    )
}

export default Reviews