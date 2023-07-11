import { observer } from 'mobx-react-lite'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import { useNavigate } from 'react-router-dom'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { ReviewsData } from '../../utils/dateBase'
import DevelopersCard from '../DevelopersCard/DevelopersCard'
import Text from '../Text/Text'
import styles from "./OurDeveloper.module.css"

const OurDevelopers = () => {
    const { show, visiable } = useRootStore().visibleStore;
    const { getUserData, userData } = useRootStore().userStore;
    const router = useNavigate()
    const Click = (id: number) => {
        show("viewProfile");
        getUserData(id);
        router(`?programmer/${id}`)
        if (visiable.viewProfile === true)
            document.body.style.overflow = "hidden"
    };
    return (
        <div className={styles.container} id="services">
            <div className={styles.top}>
                <Fade cascade>
                    <Text text="Developers for your business" textAlign={"center"} family="BenzinBold" textSize="thirtySix" />
                </Fade>
            </div>
            <Fade cascade className={styles.fade}>
                <div className={styles.cardsBox}>
                    {ReviewsData.map((e, index) => {
                        return (
                            <DevelopersCard
                                key={index}
                                name={e.name}
                                data={e.skills}
                                job={e.job}
                                avatar={e.image}
                                onPress={() => Click(e.id)}
                            />
                        );
                    })}
                </div>
            </Fade>
            <img className={styles.backOne} src={ASSETS.back3} alt="back" />
            <img className={styles.backTwo} src={ASSETS.back4} alt="back" />
        </div>
    )
}

export default observer(OurDevelopers)
