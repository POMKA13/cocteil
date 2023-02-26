import React from "react";
import search from '../../image/clarity_search-line.png'
import styles from './Search.module.css'

const Search = () => {
    return (
        <div className={styles.search}>
            <img src={search}/>
            <input type='text' placeholder='Поиск'/>
        </div>
    )
}

export default Search