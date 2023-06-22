import React from 'react'
import { ArrowDown, WorldIcon } from '../../assets/icons/Icons'
import styles from "./TranslationDrop.module.css"

const TranslationDrop = () => {
    return (
        <div className={styles.container}>
            <WorldIcon />
            <ArrowDown />
        </div>
    )
}

export default TranslationDrop
