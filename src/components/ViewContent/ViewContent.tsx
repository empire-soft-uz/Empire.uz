import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import { ReviewsData } from '../../utils/dateBase'
import Button from '../Button/Button'
import Text from '../Text/Text'
import styles from "./ViewContent.module.css"

const ViewContent = () => {
    const { userData, setServiceSendMessage } = useRootStore().userStore
    const { show, hide, visiable } = useRootStore().visibleStore
    const router = useNavigate()
    const location = useLocation();
    const OpenForm = (name: string) => {
        show("writeToDev")
        setServiceSendMessage(name, "job")
        hide("viewProfile")
        if (visiable.writeToDev === true)
            document.body.style.overflow = "hidden"
        router(location.state, { replace: true });
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (
        <div className={styles.container}>
            <Text margin='0 0 15px 0' textAlign={"center"} text={userData?.expert} textSize={'twentyTwo'} />
            <div className={styles.user}>
                <div className={styles.skill}>
                    <Text text={userData?.expertSkill} textSize={'twenty'} color={COLORS.green} />
                    <Text text={userData?.totalExperience} textSize={'fourteen'} />
                    {/* <Text text={userData?.salary} textSize={'twenty'} /> */}
                </div>
                <div className={styles.userImage}>
                    <img src={userData?.image} alt="" />
                </div>
            </div>
            <div className={styles.center}>
                <Text text={userData?.name} textSize={'twenty'} />
                <Text text={userData?.whereFrom} textSize={'eighteen'} color={COLORS.grey} />
            </div>
            <div className={styles.technical}>
                <div className={styles.technicalBox}>
                    <Text text={'Communication'} textSize={'eighteen'} />
                    <div className={styles.dotsBox}>
                        {arr.map((e, index) => {
                            return (
                                <div style={{ backgroundColor: index < userData?.communication ? "#1cd5a4" : "#124f3f" }} key={index} className={styles.dots} />
                            )
                        })}
                    </div>
                </div>
                <div className={styles.technicalBox}>
                    <Text text={'Technical Skill'} textSize={'eighteen'} />
                    <div className={styles.dotsBox}>
                        {arr.map((e, index) => {
                            return (
                                <div style={{ backgroundColor: index < userData?.technicalSkill ? "#1cd5a4" : "#124f3f" }} key={index} className={styles.dots} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.btnBox}>
                <Button onPress={() => OpenForm(userData?.name)} width='100%' title={'Message me'} btnType={'primary'} />
            </div>
        </div >
    )
}

export default ViewContent
