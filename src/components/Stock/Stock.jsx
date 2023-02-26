import React from "react";
import styles from './Stock.module.css'
import Carousel from "../Slider/Slider";



const Stock = () => {
    return (
        <section className={styles.stock}>
            <h2>Успей купить!</h2>
            <h3>Акции</h3>
            <Carousel />
        </section>
    )
}

export default Stock