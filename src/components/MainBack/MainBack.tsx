import React, { useEffect } from "react";
import { ASSETS } from "../../utils/assetsRequires";
import Header from "../Header/Header";
import Text from "../Text/Text";
import styles from "./MainBack.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import useRootStore from "../../Hooks/useRootStore";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const MainBack = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { show, visiable } = useRootStore().visibleStore;
    const { setServiceSendMessage } = useRootStore().userStore;
    const { t } = useTranslation();
    const contactUs = () => {
        show("writeToDev");
        setServiceSendMessage(t("send_to"), "job");
        if (visiable.writeToDev === true)
            document.body.style.overflow = "hidden";
    };
    return (
        <div className={styles.container}>
            <Header />
            <div
                className={styles.textBox}
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <Text
                    text={t("what_do_we_do")}
                    textSize="fifty"
                    positon="relative"
                    transform={"uppercase"}
                    zIndex="2"
                    family="BenzinBold"
                />
                {/* <a href="#submit-app" className="href">
                    <div className={styles.DownBox}>
                        <span className={styles.span}></span>
                        <HiOutlineArrowDown
                            size={36}
                            className={styles.downIcon}
                        />
                    </div>
                </a> */}
                <div className={styles.contactBtn}>
                    <Button
                        title={t("contact_us")}
                        btnType={"outline"}
                        titleSize={"22px"}
                        onPress={contactUs}
                    />
                </div>
                <div className={styles.blur}></div>
            </div>
            <img
                data-aos="fade-down-left"
                data-aos-duration="1200"
                className={styles.backOne}
                src={ASSETS.back1}
                alt="back"
            />
            <img
                data-aos="fade-down-right"
                data-aos-duration="1250"
                className={styles.backTwo}
                src={ASSETS.back2}
                alt="back"
            />
        </div>
    );
};

export default observer(MainBack);
