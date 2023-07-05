import { Backdrop } from '@mui/material'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { BackIcon, CloseBig } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { ReviewsData } from '../../utils/dateBase'
import Avatar from '../Avatar/Avatar'
import PersonAbout from '../PersonAbout/PersonAbout'
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience'
import Skills from '../Skills/Skills'
import ViewContent from '../ViewContent/ViewContent'
import styles from "./ViewProfile.module.css"

const ViewProfile = () => {
    const { visiable, hide } = useRootStore().visibleStore
    const { userData, onViewProfile } = useRootStore().userStore
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 4 }}
                open={visiable.viewProfile}
                onClick={() => hide("viewProfile")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.viewProfile ? "block" : "none" }}>
                <div className={styles.closeModal} onClick={() => hide("viewProfile")}>
                    <CloseBig />
                </div>
                <div className={styles.pagination}>
                    <div className={styles.arrow}>
                        {"<"}
                    </div>
                    {ReviewsData.map((e, index) => {
                        return (
                            <Avatar active={e.id === userData.id} onPress={() => onViewProfile(e)} key={index} imageUrl={e.image} />
                        )
                    })}
                    <div className={styles.arrow}>
                        {">"}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.leftBox}>
                        <ViewContent />
                        <Skills />
                    </div>
                    <div className={styles.rightBox}>
                        <PersonAbout title={userData.expert} text={userData.comment} />
                        <ProfessionalExperience />
                        <PersonAbout title={userData.education} text={userData.eduBranch} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(ViewProfile)
