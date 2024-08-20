import React, { useState } from 'react';
import logo from '../../assets/Images/Logo.png';
import styles from './Header.module.scss';

import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

export const Header = () => {

    return (
        <header className={styles.HeaderMain}>
            <div className={styles.Hero}>
                <img src={logo} alt="Header Logo" />
            </div>
            <BurgerMenu></BurgerMenu>
        </header>
    );
};


