import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DevelopersCard from "../../components/DevelopersCard/DevelopersCard";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import useRootStore from "../../Hooks/useRootStore";
import { ReviewsData } from "../../utils/dateBase";
import styles from "./Developers.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ASSETS } from "../../utils/assetsRequires";
import ViewProfile from "../../components/ViewProfile/ViewProfile";
import WriteToDeveloper from "../../components/WriteToDeveloper/WriteToDeveloper";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import i18n from "../../translations";
import { observer } from "mobx-react-lite";

const Developers = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        if (location.pathname === `/${i18n.language}/developers`)
            document.documentElement.scrollTo(0, 0);
    }, []);

    const { show, visiable } = useRootStore().visibleStore;
    const { getUserData, userData, setServiceSendMessage } =
        useRootStore().userStore;
    const router = useNavigate();
    const { t } = useTranslation();
    const messageMe = (name: string) => {
        show("writeToDev");
        setServiceSendMessage(name, "job");
        if (visiable.writeToDev === true)
            document.body.style.overflow = "hidden";
    };

    const Click = (id: number) => {
        show("viewProfile");
        getUserData(id);
        router(`?programmer/${id}`);
        if (visiable.viewProfile === true)
            document.body.style.overflow = "hidden";
    };
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div
                    className={styles.top}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <Text
                        text={t("developer_for")}
                        textAlign={"flex-start"}
                        family="BenzinBold"
                        textSize="thirtySix"
                    />
                </div>
                <div
                    className={styles.cardsBox}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {ReviewsData.map((e, index) => {
                        return (
                            <DevelopersCard
                                key={index}
                                name={e.name}
                                data={e.skills}
                                job={e.job}
                                avatar={e.image}
                                messageMe={() => messageMe(e.name)}
                                onPress={() => Click(e.id)}
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
            <div className={styles.footer}>
                <Footer />
            </div>
            <ViewProfile />
            <WriteToDeveloper />
        </>
    );
};

export default observer(Developers);
