import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import Text from '../Text/Text'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <a href="/" className='href'>
                <Text text='Logo' cursor='pointer' family='FuturaBold' color={COLORS.white} textSize='thirtySix' />
            </a>
            <div className={styles.rightBox}>
                <a href="#services" className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="#about-us" className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                <a href="/blog" className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='Blog' color={COLORS.white} />
                </a>
            </div>
            <img className={styles.back} src={ASSETS.back6} />
        </div>
    )
}

export default Footer
