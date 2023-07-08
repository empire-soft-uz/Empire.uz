import React, { useRef } from 'react'
import { Backdrop } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { CloseBig } from '../../assets/icons/Icons'
import useRootStore from '../../hooks/useRootStore'
import { ReviewsData } from '../../utils/dateBase'
import Avatar from '../Avatar/Avatar'
import PersonAbout from '../PersonAbout/PersonAbout'
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience'
import Skills from '../Skills/Skills'
import ViewContent from '../ViewContent/ViewContent'
import styles from "./ViewProfile.module.css"
import { useState, useEffect } from 'react';

const ViewProfile = () => {

    const outerDiv = useRef<HTMLDivElement>(null)
    const inerDiv = useRef<HTMLDivElement>(null)

    const [currents, setCurrents] = useState(1)

    const { visiable, hide, show } = useRootStore().visibleStore
    const { userData, getUserData, } = useRootStore().userStore

    useEffect(() => {
        const outerWidth = outerDiv.current?.clientWidth
        const inerWidth = inerDiv.current?.clientWidth
    }, [ReviewsData])

    const NextUser = (id: number) => {
        setCurrents(currents + 1)
        if (id < ReviewsData.length) {
            getUserData(userData.id + 1)
        }
        outerDiv.current?.scrollTo({
            left: inerDiv.current?.clientWidth! * currents,
            top: 0,
            behavior: 'smooth',
        })

    }
    const BackUser = (id: number) => {
        setCurrents(1)
        if (id > 1) {
            getUserData(userData.id - 1)
        }
        outerDiv.current?.scrollTo({
            left: -(inerDiv.current?.clientWidth! * currents),
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 6 }}
                open={visiable.viewProfile}
                onClick={() => hide("viewProfile")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.viewProfile ? "block" : "none" }}>
                <div className={styles.closeModal} onClick={() => hide("viewProfile")}>
                    <CloseBig />
                </div>
                <div className={styles.pagination}>
                    <button className={styles.arrow} onClick={() => BackUser(userData.id)}>
                        {"<"}
                    </button>
                    <div className={styles.pageBox} ref={outerDiv}>
                        {ReviewsData.map((e, index) => {
                            return (
                                <div key={index} className={styles.avatarBox} ref={inerDiv}>
                                    <Avatar active={e.id === userData.id} onPress={() => getUserData(index += 1)} key={index} imageUrl={e.image} />
                                </div>
                            )
                        })}
                    </div>
                    <button className={styles.arrow} onClick={() => NextUser(userData.id)}>
                        {">"}
                    </button>
                </div>
                <div className={styles.info}>
                    <div className={styles.leftBox}>
                        <ViewContent />
                        <Skills />
                    </div>
                    <div className={styles.rightBox}>
                        <PersonAbout title={userData.expert} text={userData.comment} />
                        <ProfessionalExperience />
                        <PersonAbout margin='30px 0 0 0' title={userData.education} text={userData.eduBranch} />
                        <PersonAbout margin='30px 0 0 0' title={'About Me'} text={userData.comment} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(ViewProfile)
