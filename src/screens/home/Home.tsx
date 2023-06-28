import { observer } from 'mobx-react-lite'
import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Calendly from '../../components/Calendly/Calendly'
import FindDeveloper from '../../components/FindDeveloper/FindDeveloper'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import MainBack from '../../components/MainBack/MainBack'
import OurAdventages from '../../components/OurAdventages/OurAdventages'
import OurServices from '../../components/OurServices/OurServices'
import Reviews from '../../components/Reviews/Reviews'
import StartMach from '../../components/StartMach/StartMach'
import SubmitApp from '../../components/SubmitApp/SubmitApp'
import WeWillContact from '../../components/WeWillContact/WeWillContact'
import styles from "./home.styles.module.css"

const Home = () => {
    return (
        <div className={styles.container}>
            <MainBack />
            <OurServices />
            <AboutUs />
            <OurAdventages />
            <SubmitApp />
            <Reviews />
            <Footer />
            <FindDeveloper />
            <Calendly />
            <StartMach />
            <WeWillContact />
            <Loading />
        </div>
    )
}

export default observer(Home);
