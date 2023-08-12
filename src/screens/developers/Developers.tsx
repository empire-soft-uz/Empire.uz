import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const Developers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { show, visiable } = useRootStore().visibleStore;
    const { getUserData, userData } = useRootStore().userStore;
    const router = useNavigate();
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
                        text="Developers for your business"
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
            <ViewProfile />
            <WriteToDeveloper />
        </>
    );
};

export default Developers;
