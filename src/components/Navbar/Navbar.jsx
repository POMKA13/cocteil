import React, {useState} from "react";
import styles from './Navbar.module.css'
import logo from '../../image/logoneon.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenuOpen = () => {
        setIsOpen(true)
    }

    const toggleMenuClose = () => {
        setIsOpen(false)
    }


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
                    <a href='#'>Женщинам </a>
                    <a href='#'>Мужчинам</a>
                    <a href='#'>Детям</a>
                    <a href='#'>Обувь</a>
                    <a href='#'>Игрушки</a>
                    <a href='#'>Аксессуары</a>
                    <a href='#'>Большие размеры</a>
                    <a href='#'>Дополнительно</a>
                    <a href='#'>Акции</a>
                </div>)}

        </nav>
    )
}

export default Navbar