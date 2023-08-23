import React, { useEffect } from "react";
import { ASSETS } from "../../utils/assetsRequires";
import { COLORS } from "../../utils/color";
import Text from "../Text/Text";
import styles from "./AboutUs.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { t } = useTranslation();
    return (
        <div className={styles.container} id="about-us">
            <div
                className={styles.header}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <Text
                    text={t("about_us")}
                    transform={"uppercase"}
                    textAlign={"center"}
                    family="BenzinBold"
                    textSize={"thirtySix"}
                />
            </div>
            <div
                className={styles.content}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className={styles.leftBox}>
                    <Text
                        textSize="sixteen"
                        color={COLORS.grey}
                        margin="20px 0"
                        family="FuturaBook"
                        text={t("about_us_info")}
                    />
                </div>
                <div className={styles.imageBox}>
                    <img src={ASSETS.person} alt="" />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.blurPerson}></div>
            </div>
            <img
                data-aos="fade-down-right"
                data-aos-duration="1200"
                className={styles.back}
                src={ASSETS.back2}
            />
        </div>
    );
};

export default AboutUs;
