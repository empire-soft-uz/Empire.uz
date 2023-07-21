import React, { useEffect } from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Text from '../Text/Text'
import styles from "./AboutUs.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.container} id="about-us">
            <div className={styles.header} data-aos="fade-up"
                data-aos-duration="1500">
                <Text text='ABOUT US' textAlign={"center"} family="BenzinBold" textSize={"thirtySix"} />
            </div>
            <div className={styles.content} data-aos="fade-up"
                data-aos-duration="1500">
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
            <img data-aos="fade-down-right" data-aos-duration="1200" className={styles.back} src={ASSETS.back2} />
        </div>
    )
}

export default AboutUs
