import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom'; 
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div className={styles.BurgerMenu} onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>

            <nav
                ref={menuRef}
                className={`${styles.NavMenu} ${isOpen ? styles.NavMenuOpen : ''}`}
            >
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Forside</Link></li>
                    <li><Link to="/Products" onClick={toggleMenu}>Produkter</Link></li>
                    <li><Link to="/News" onClick={toggleMenu}>Nyheder</Link></li>
                    <li><Link to="/Contact" onClick={toggleMenu}>Kontakt</Link></li>
                    <li><Link to="/Login" onClick={toggleMenu}>Login</Link></li>
                </ul>
            </nav>
        </>
    );
};


