import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import styles from "./PrivacyPolicy.module.css";
import Text from "../../components/Text/Text";
import { PrivacyPolicyData } from "../../utils/dateBase";
import Footer from "../../components/Footer/Footer";
import { COLORS } from "../../utils/color";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import i18n from "../../translations";
import { ASSETS } from "../../utils/assetsRequires";

const PrivacyPolicy = () => {
    const location = useLocation();
    useEffect(() => {
        Aos.init();
        Aos.refresh();
        if (location.pathname == `/${i18n.language}/privacy-policy`)
            document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div
                    className={styles.content}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <Text
                        text={PrivacyPolicyData.text}
                        color={COLORS.grey}
                        textSize={"sixteen"}
                    />
                </div>
                <img
                    data-aos="fade-down-left"
                    data-aos-duration="1200"
                    className={styles.backOne}
                    src={ASSETS.back3}
                    alt="back"
                />
                <img
                    data-aos="fade-down-right"
                    data-aos-duration="1200"
                    className={styles.backTwo}
                    src={ASSETS.back2}
                    alt="back"
                />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default PrivacyPolicy;
