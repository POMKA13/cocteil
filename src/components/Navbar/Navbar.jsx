import React, {useState} from "react";
import styles from './Navbar.module.css'
import logo from '../../image/logoneon.png'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenuOpen = () => setIsOpen(true)
    const toggleMenuClose = () => setIsOpen(false)

    return (
        <nav>
            <button className={styles.buttonOpen} onClick={toggleMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isOpen && (
                <div className={styles.menu}>
                    <div className={styles.logo}>
                        <img src={logo}/>
                        <button className={styles.buttonClose} onClick={toggleMenuClose}>
                            <span className={styles.close1}></span>
                            <span className={styles.close2}></span>
                        </button>
                    </div>
                    <NavLink to='#'>Женщинам </NavLink>
                    <NavLink to='#'>Мужчинам</NavLink>
                    <NavLink to='#'>Детям</NavLink>
                    <NavLink to='#'>Обувь</NavLink>
                    <NavLink to='#'>Игрушки</NavLink>
                    <NavLink to='#'>Аксессуары</NavLink>
                    <NavLink to='#'>Большие размеры</NavLink>
                    <NavLink to='#'>Дополнительно</NavLink>
                    <NavLink to='#'>Акции</NavLink>
                </div>)}

        </nav>
    )
}

export default Navbar