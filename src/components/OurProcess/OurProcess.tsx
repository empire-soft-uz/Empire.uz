import React, { useEffect } from 'react'
import { OurProcessData, ReviewsData } from '../../utils/dateBase'
import ReviewsCard from '../ReviewCard/ReviewsCard'
import Text from '../Text/Text'
import styles from "./OurProcess.module.css"
import _ from 'lodash'
import { COLORS } from '../../utils/color'
import AOS from "aos";
import "aos/dist/aos.css";

const OurProcess = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.header} data-aos="fade-up"
                data-aos-duration="1500">
                <Text textAlign={"center"} text='OUR PROCESS' family="BenzinBold" textSize='thirtySix' />
            </div>
            <div className={styles.content} data-aos="fade-up"
                data-aos-duration="1500">
                <div className={styles.cardsBox}>
                    <div className={styles.line}></div>
                    {OurProcessData.map((e, index) => {
                        return (
                            <div key={index} className={styles.cards}>
                                <div className={styles.dot}></div>
                                <h2 className={styles.Count}>{e.id}</h2>
                                <Text text={e.title} textSize={'twenty'} />
                                <Text family='FuturaBook' textAlign={"center"} text={e.text} textSize={'fourteen'} color={COLORS.grey} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurProcess
