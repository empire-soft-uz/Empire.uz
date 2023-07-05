import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import Text from '../Text/Text'
import styles from "./ViewContent.module.css"

const ViewContent = () => {
    const { userData } = useRootStore().userStore
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.skill}>
                    <Text text={userData.expert} textSize={'twentyTwo'} />
                    <Text text={userData.expertSkill} textSize={'twenty'} color={COLORS.green} />
                    <Text text={userData.totalExperience} textSize={'fourteen'} />
                </div>
                <div className={styles.userImage}>
                    <img src={userData.image} alt="" />
                </div>
            </div>
            <div className={styles.center}>
                <Text text={userData.name} textSize={'twenty'} />
                <Text text={userData.whereFrom} textSize={'eighteen'} color={COLORS.grey} />
                <Text text={userData.salary} textSize={'twentyTwo'} />
            </div>
            <div className={styles.technical}>
                <Text text={'Communication'} textSize={'eighteen'} />
                <Text text={'Technical Skill'} textSize={'eighteen'} />
            </div>
            <div className={styles.btnBox}>
                <Button width='100%' title={'Message me'} btnType={'primary'} />
            </div>
        </div>
    )
}

export default ViewContent
