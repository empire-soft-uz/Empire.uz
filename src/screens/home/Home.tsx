import { observer } from 'mobx-react-lite'
import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Calendly from '../../components/Calendly/Calendly'
import FindDeveloper from '../../components/FindDeveloper/FindDeveloper'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import MainBack from '../../components/MainBack/MainBack'
import OurAdventages from '../../components/OurAdventages/OurAdventages'
import OurProcess from '../../components/OurProcess/OurProcess'
import OurServices from '../../components/OurServices/OurServices'
import StartMach from '../../components/StartMach/StartMach'
import SubmitApp from '../../components/SubmitApp/SubmitApp'
import ViewProfile from '../../components/ViewProfile/ViewProfile'
import WeWillContact from '../../components/WeWillContact/WeWillContact'
import WriteToDeveloper from '../../components/WriteToDeveloper/WriteToDeveloper'
import styles from "./home.styles.module.css"

const Home = () => {
    return (
        <div className={styles.container}>
            <MainBack />
            <OurServices />
            <AboutUs />
            <OurAdventages />
            <SubmitApp />
            <OurProcess />
            <Footer />
            <FindDeveloper />
            <Calendly />
            <StartMach />
            <WeWillContact />
            <ViewProfile />
            <WriteToDeveloper />
            <Loading />
        </div>
    )
}

export default observer(Home);
