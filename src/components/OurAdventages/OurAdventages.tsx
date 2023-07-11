import React, { useEffect } from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { AdventagesData } from '../../utils/dateBase'
import AdventagesCard from '../AdventagesCard/AdventagesCard'
import Text from '../Text/Text'
import styles from "./OurAdventages.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

const OurAdventages = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.container} id="our-advantages">
            <div className={styles.header} data-aos="fade-up"
                data-aos-duration="1500">
                <Text text='our advantages' textAlign={"center"} family="BenzinBold" transform={"uppercase"} textSize='thirtySix' />
            </div>
            <div className={styles.cardsBox} data-aos="fade-up"
                data-aos-duration="2000">
                {AdventagesData.map((e, index) => {
                    return (
                        <AdventagesCard
                            key={index}
                            icon={e.icon}
                            name={e.name}
                            text={e.text}
                        />
                    )
                })}
                <div className={styles.blur}></div>
            </div>
            <img data-aos="fade-down-left" data-aos-duration="1200" className={styles.back} src={ASSETS.back3} alt="" />
        </div>
    )
}

export default OurAdventages
