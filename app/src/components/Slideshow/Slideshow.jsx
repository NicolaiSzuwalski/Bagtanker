import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.scss';
import slide1 from '../../assets/Slide/Slide1.png';
import slide2 from '../../assets/Slide/Slide2.jpeg';
import slide3 from '../../assets/Slide/Slide3.jpeg';
import slide4 from '../../assets/Slide/Slide4.jpeg';
import slide5 from '../../assets/Slide/Slide5.jpeg';
import slideNav from '../../assets/Slide/SlideNav.png'


export const Slideshow = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNavClick = (index) => {
        setCurrentSlide(index);
    };

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
            
            <div className={styles.SlideNavContainer}>
                <img src={slideNav} alt="slideNav" className={styles.SlideNavImage} />
                <div className={styles.NavDots}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.Dot} ${index === currentSlide ? styles.ActiveDot : ''}`}
                            onClick={() => handleNavClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
