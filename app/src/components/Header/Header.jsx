import React, { useState } from 'react';
import logo from '../../assets/Images/Logo.png';
import styles from './Header.module.scss';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.HeaderMain}>
            <div className={styles.Hero}>
                <img src={logo} alt="Header Logo" />
            </div>

            <div className={styles.BurgerMenu} onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>

            {isOpen && (
                <nav className={styles.NavMenu}>
                    <ul>
                        <li><a href="#home">Forside</a></li>
                        <li><a href="#about">Produkter</a></li>
                        <li><a href="#services">Nyheder</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};


