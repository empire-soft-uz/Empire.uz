import { Backdrop } from '@mui/material'
import { Pagination } from 'antd'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { BackIcon, CloseBig } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { ReviewDataType } from '../../types/types'
import { ReviewsData } from '../../utils/dateBase'
import Avatar from '../Avatar/Avatar'
import PersonAbout from '../PersonAbout/PersonAbout'
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience'
import Skills from '../Skills/Skills'
import ViewContent from '../ViewContent/ViewContent'
import styles from "./ViewProfile.module.css"

const ViewProfile = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { userData, getUserData, } = useRootStore().userStore
    const NextUser = (id: number) => {
        if (id < ReviewsData.length) {
            getUserData(userData.id + 1)
        }
    }
    const BackUser = (id: number) => {
        if (id > 1) {
            getUserData(userData.id - 1)
        }
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
                    {ReviewsData.map((e, index) => {
                        return (
                            <Avatar active={e.id === userData.id} onPress={() => getUserData(index += 1)} key={index} imageUrl={e.image} />
                        )
                    })}
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
