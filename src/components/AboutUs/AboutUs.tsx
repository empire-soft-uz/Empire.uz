import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Text from '../Text/Text'
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container} id="about-us">
            <div className={styles.header}>
                <Text text='ABOUT US' textAlign={"center"} family="BenzinBold" textSize={"thirtySix"} />
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <Text
                        textSize='sixteen'
                        color={COLORS.grey}
                        margin="20px 0"
                        family="FuturaBook"
                        text='“Empire Studio” shapes the future of market-leading brands. We transform outdated customer-facing software into pioneering, beautifully crafted solutions that lead the evolution of web technologies and exceed customer expectations.
                                Contact us for trusted support to keep up with the tech and trends you need to modernise your core digital business.' />
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
