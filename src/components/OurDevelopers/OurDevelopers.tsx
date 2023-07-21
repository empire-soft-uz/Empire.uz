import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Fade } from "react-awesome-reveal"
import { useNavigate } from 'react-router-dom'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { ReviewsData } from '../../utils/dateBase'
import DevelopersCard from '../DevelopersCard/DevelopersCard'
import Text from '../Text/Text'
import styles from "./OurDeveloper.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '../Button/Button'
import { APP_ROUTES } from '../../routes/app-routes'

const OurDevelopers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
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
        <div className={styles.container} id="our-developers">
            <div className={styles.top} data-aos="fade-up"
                data-aos-duration="1500">
                <Text text="Developers for your business" textAlign={"center"} family="BenzinBold" textSize="thirtySix" />
            </div>
            <div className={styles.cardsBox} data-aos="fade-up"
                data-aos-duration="1500">
                {ReviewsData.slice(0, 6).map((e, index) => {
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
            <div className={styles.seeAll}>
                <Button onPress={() => router(APP_ROUTES.DEVELOPERS)} titleSize={18} title={'See All Developers'} btnType={'primary'} />
            </div>
            <img data-aos="fade-down-left" data-aos-duration="1200" className={styles.backTwo} src={ASSETS.back3} alt="back" />
            {/* <img className={styles.backTwo} src={ASSETS.back4} alt="back" /> */}
        </div>
    )
}

export default observer(OurDevelopers)
