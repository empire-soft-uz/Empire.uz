import React, { useEffect, useState } from "react";
import { UiIcon } from "../../assets/icons/Icons";
import RowItem from "../RowItem/RowItem";
import styles from "./OurServices.module.css";
import Text from "../Text/Text";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ServicesData } from "../../utils/dateBase";
import { ASSETS } from "../../utils/assetsRequires";
import useRootStore from "../../Hooks/useRootStore";
import { observer } from "mobx-react-lite";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { show, visiable } = useRootStore().visibleStore;
    const { setServiceSendMessage } = useRootStore().userStore;
    const OpenForm = (name: string) => {
        show("writeToDev");
        setServiceSendMessage(name, "job");
        if (visiable.social === true) document.body.style.overflow = "hidden";
    };
    return (
        <div className={styles.container} id="services">
            <div
                className={styles.top}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <Text
                    text="OUR SERVICES"
                    textAlign={"center"}
                    family="BenzinBold"
                    textSize="thirtySix"
                />
            </div>
            <div
                className={styles.cardsBox}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                {ServicesData.map((e, index) => {
                    return (
                        <ServiceCard
                            key={index}
                            name={e.name}
                            text={e.text}
                            icon={e.icon}
                            onPress={() => OpenForm(e.name)}
                        />
                    );
                })}
            </div>
            <img
                data-aos="fade-down-right"
                data-aos-duration="1200"
                className={styles.backOne}
                src={ASSETS.back3}
                alt="back"
            />
            <img
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className={styles.backTwo}
                src={ASSETS.back4}
                alt="back"
            />
        </div>
    );
};

export default observer(OurServices);
