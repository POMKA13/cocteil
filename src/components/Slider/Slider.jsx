import React, {useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import styles from './Slider.module.css'
import arrow from '../../image/Arrow8.png'

const Carousel = () => {
        const sliderRef = useRef(null);

        const prevSlide = () => {
            sliderRef.current.slickPrev();
        };

        const nextSlide = () => {
            sliderRef.current.slickNext();
        };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className={styles.slider}>
            <div className={styles.button_container}>
                <button className={styles.prev} onClick={prevSlide}>
                    <img src={arrow}/>
                </button>
            </div>
            <Slider ref={sliderRef} {...settings}>
                <div className={styles.card}>
                    <Card />
                </div>
                <div className={styles.card}>
                    <Card />
                </div>
                <div className={styles.card}>
                    <Card />
                </div>
                <div className={styles.card}>
                    <Card />
                </div>
                <div className={styles.card}>
                    <Card />
                </div>
                <div className={styles.card}>
                    <Card />
                </div>
            </Slider>
            <div className={styles.button_container}>
                <button className={styles.next} onClick={nextSlide}>
                    <img src={arrow}/>
                </button>
            </div>

        </div>

    );
}

export default Carousel
