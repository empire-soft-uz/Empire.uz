import React, { useEffect } from "react";
import styles from "./RateCards.module.css";
import { RateData } from "../../utils/dateBase";
import Text from "../Text/Text";
import { COLORS } from "../../utils/color";
import { ASSETS } from "../../utils/assetsRequires";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import useRootStore from "../../Hooks/useRootStore";
import { observer } from "mobx-react-lite";

const RateCards = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { show, visiable } = useRootStore().visibleStore;
    const { setServiceSendMessage } = useRootStore().userStore;
    const OpenForm = (name: string) => {
        show("writeToDev");
        setServiceSendMessage(name, "job");
        if (visiable.writeToDev === true)
            document.body.style.overflow = "hidden";
    };
    return (
        <div className={styles.container}>
            {RateData.map((item, index) => {
                return (
                    <div
                        className={styles.card}
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div>
                            <div className={styles.rowItem}>
                                <div className={styles.iconBox}>
                                    <img
                                        className={styles.img}
                                        src={item.icon}
                                    />
                                </div>
                                <div className={styles.textBox}>
                                    <Text text={item.title} textSize="twenty" />
                                    <Text
                                        text={item.name}
                                        textSize="sixteen"
                                        family="FuturaBook"
                                    />
                                </div>
                            </div>
                            <div className={styles.infoBox}>
                                {item.info.map((e, index) => {
                                    return (
                                        <div
                                            className={styles.item}
                                            key={index}
                                        >
                                            <img
                                                width={20}
                                                height={20}
                                                src={ASSETS.check}
                                                alt=""
                                            />
                                            <Text
                                                text={e.name}
                                                textSize={"fourteen"}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.bottomBx}>
                            <div className={styles.priceBox}>
                                <Text
                                    margin="10px 0"
                                    textAlign={"center"}
                                    text={item.price}
                                    textSize={"twentyEight"}
                                />
                                <Text
                                    margin="10px 0"
                                    textAlign={"center"}
                                    text={`/${item.period}`}
                                    textSize={"fourteen"}
                                />
                            </div>
                            <button
                                onClick={() => OpenForm(item.title)}
                                className={styles.btn}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default observer(RateCards);
