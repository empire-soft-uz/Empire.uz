import { observer } from "mobx-react-lite";
import React, { useEffect, useState, Suspense } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
// import Calendly from "../../components/Calendly/Calendly";
import FindDeveloper from "../../components/FindDeveloper/FindDeveloper";
import Footer from "../../components/Footer/Footer";
import InitialLoading from "../../components/InitialLoading/InitialLoading";
import Loading from "../../components/Loading/Loading";
import MainBack from "../../components/MainBack/MainBack";
import OurAdventages from "../../components/OurAdventages/OurAdventages";
import OurDevelopers from "../../components/OurDevelopers/OurDevelopers";
import OurProcess from "../../components/OurProcess/OurProcess";
import OurServices from "../../components/OurServices/OurServices";
import RateCards from "../../components/RateCards/RateCards";
import Social from "../../components/Social/Social";
import StartMach from "../../components/StartMach/StartMach";
import SubmitApp from "../../components/SubmitApp/SubmitApp";
import UpBtn from "../../components/UpBtn/UpBtn";
import ViewProfile from "../../components/ViewProfile/ViewProfile";
import WeWillContact from "../../components/WeWillContact/WeWillContact";
import WriteToDeveloper from "../../components/WriteToDeveloper/WriteToDeveloper";
import useRootStore from "../../Hooks/useRootStore";
import styles from "./home.styles.module.css";

const Home = () => {
    const { show, hide } = useRootStore().visibleStore;
    useEffect(() => {
        const handleScrollBtn = () => {
            window.pageYOffset > 300 ? show("upBtn") : hide("upBtn");
        };
        window.addEventListener("scroll", handleScrollBtn);

        return () => {
            window.removeEventListener("scroll", handleScrollBtn);
        };
    }, []);
    return (
        <div className={styles.container}>
            <MainBack />
            <RateCards />
            <OurServices />
            <OurDevelopers />
            <AboutUs />
            <OurAdventages />
            <SubmitApp />
            <OurProcess />
            <Footer blog />
            <FindDeveloper />
            <StartMach />
            <WeWillContact />
            <ViewProfile />
            <WriteToDeveloper />
            <Loading />
            <UpBtn />
            <Social />
            <InitialLoading />
        </div>
    );
};

export default observer(Home);
