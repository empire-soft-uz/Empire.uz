import React from 'react'
import { ArrowFall } from '../../assets/icons/Icons'
import { ASSETS } from '../../utils/assetsRequires'
import Header from '../Header/Header'
import Text from '../Text/Text'
import styles from "./MainBack.module.css"

const MainBack = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.textBox}>
                <Text
                    text='We develop complex projects - simply. Sharing our team'
                    size={60}
                    positon="relative"
                    zIndex='2'
                />
                <a href="#our-advantages" className="href">
                    <div className={styles.DownBox}>
                        <ArrowFall />
                    </div>
                </a>
                <div className={styles.blur}></div>
            </div>
            <img className={styles.backOne} src={ASSETS.back1} alt="back" />
            <img className={styles.backTwo} src={ASSETS.back2} alt="back" />
        </div>
    )
}

export default MainBack
