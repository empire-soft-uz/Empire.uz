import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { AdventagesData } from '../../utils/dateBase'
import AdventagesCard from '../AdventagesCard/AdventagesCard'
import Text from '../Text/Text'
import styles from "./OurAdventages.module.css"

const OurAdventages = () => {
    return (
        <div className={styles.container} id="our-advantages">
            <div className={styles.header}>
                <Text text='our advantages' textAlign={"center"} family="BenzinBold" transform={"uppercase"} textSize='thirtySix' />
            </div>
            <div className={styles.cardsBox}>
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
            <img className={styles.back} src={ASSETS.back3} alt="" />
        </div>
    )
}

export default OurAdventages
