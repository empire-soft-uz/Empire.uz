import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Text from '../Text/Text'
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container} id="about-us">
            <div className={styles.header}>
                <Text text='ABOUT US' size={40} />
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <Text
                        color={COLORS.grey}
                        family="FuturaBook"
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                </div>
                <div className={styles.imageBox}>
                    <img src={ASSETS.person} alt="" />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.blurPerson}></div>
            </div>
            <img className={styles.back} src={ASSETS.back2} />
        </div>
    )
}

export default AboutUs
