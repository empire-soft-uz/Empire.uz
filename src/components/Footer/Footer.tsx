import React, { useEffect } from "react";
import { ASSETS } from "../../utils/assetsRequires";
import { COLORS } from "../../utils/color";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-routes";
import { useTranslation } from "react-i18next";
import i18n from "../../translations";
interface Props {
    blog?: boolean;
}

const Footer: React.FC<Props> = ({ blog }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const navigation = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const OpenBlog = () => {
        if (location.pathname != `/${i18n.language}/blog`)
            navigation(`/${i18n.language}/blog`);
    };
    const OpenPrivacy = () => {
        if (location.pathname != `/${i18n.language}/privacy-policy`)
            navigation(`/${i18n.language}/privacy-policy`);
    };
    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <a href="/" className="href">
                    <img
                        className={styles.logo}
                        src={process.env.PUBLIC_URL + "/logo.svg"}
                        alt="Empire-soft"
                    />
                </a>
            </div>
            <div className={styles.rightBox}>
                <a href="#services" className="href">
                    <Text
                        onPress={() => navigation(`/${i18n.language}#services`)}
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("services")}
                        color={COLORS.white}
                    />
                </a>
                <a href="#our-developers" className="href">
                    <Text
                        onPress={() =>
                            navigation(`/${i18n.language}#our-developers`)
                        }
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("developers")}
                        color={COLORS.white}
                    />
                </a>
                <a href="#about-us" className="href">
                    <Text
                        onPress={() => navigation(`/${i18n.language}#about-us`)}
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("about_us")}
                        color={COLORS.white}
                    />
                </a>
                <a onClick={OpenBlog} className="href">
                    <Text
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("blog")}
                        color={COLORS.white}
                    />
                </a>
                <a onClick={OpenPrivacy} className="href">
                    <Text
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("privacy")}
                        color={COLORS.white}
                    />
                </a>
            </div>
            <div className={styles.social}>
                <a href="tel:+998994480500" className="href">
                    <Text
                        textSize="sixteen"
                        cursor="pointer"
                        text="+998 99 448 05 00"
                        color={COLORS.green}
                    />
                </a>
                <a
                    target={"_blank"}
                    href="mailto:empire.soft.net@gmail.com"
                    className="href"
                >
                    <Text
                        textSize="sixteen"
                        cursor="pointer"
                        text="empire.soft.net@gmail.com"
                        color={COLORS.green}
                    />
                </a>
                <div className={styles.socialIconB}>
                    <a
                        target={"_blank"}
                        href="https://T.me/+998994480500"
                        className="href"
                    >
                        <img
                            className={styles.socialIcon}
                            src="/telegram.png"
                            alt=""
                        />
                    </a>
                    <a
                        target={"_blank"}
                        href="https://wa.me/+998994480500"
                        className="href"
                    >
                        <img
                            className={styles.socialIcon}
                            src="/whatsapp.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <img className={styles.back} src={ASSETS.back6} />
        </div>
    );
};

export default Footer;
