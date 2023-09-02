import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowRightButton from "../../components/ArrowRightButton/ArrowRightButton";
import Text from "../../components/Text/Text";
import useRootStore from "../../Hooks/useRootStore";
import i18n from "../../translations";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
    const { t } = useTranslation();
    const navigation = useNavigate();
    const { visiable, hide } = useRootStore().visibleStore;
    const next = () => {
        hide("findDeveloper");
        hide("smartMach");
        hide("weWillContact");
        hide("writeToDev");
        hide("viewProfile");
        hide("calendly");
        document.body.style.overflow = "auto";
        navigation(`/${i18n.language}`);
    };

    useEffect(() => {
        const redirectToThankYouPage = () => {
            if (visiable.weWillContact === false) {
                window.location.href = `/${i18n.language}`;
            }
        };
        redirectToThankYouPage();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.mediaCenter}>
                <div className={styles.title}>
                    <Text
                        text={t("thank_you")}
                        lineHeight={40}
                        textSize="forty"
                    />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.footer}>
                    <ArrowRightButton onClick={next} />
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
