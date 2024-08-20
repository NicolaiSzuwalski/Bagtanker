import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.scss';
import slide1 from '../../assets/Slide/Slide1.png';
import slide2 from '../../assets/Slide/Slide2.jpeg';
import slide3 from '../../assets/Slide/Slide3.jpeg';
import slide4 from '../../assets/Slide/Slide4.jpeg';
import slide5 from '../../assets/Slide/Slide5.jpeg';


export const Slideshow = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className={styles.Slideshow}>
            <div className={styles.SlideshowWrapper}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.Slide} ${index === currentSlide ? styles.SlideActive : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}
            </div>
        </div>
    );
};
