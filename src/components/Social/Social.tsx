import { Backdrop } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import CloseBtn from '../CloseBtn/CloseBtn'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from "./Social.module.css"

const Social = () => {
    
    const { show, visiable, hide } = useRootStore().visibleStore
    const {clearServiceSendDevForm, serviceSendData} = useRootStore().userStore
    const closeModal = () => {
        hide("social")
        clearServiceSendDevForm()
        if (visiable.social === false)
            document.body.style.overflow = "auto"
    }
    return (
        <>
        <Backdrop
            sx={{ color: '#fff', zIndex: 8, backgroundColor: "rgba(0,0,0, 0.8)" }}
            open={visiable.social}
            onClick={closeModal}
        ></Backdrop>
            <div className={styles.container} style={{ display: visiable.social ? "block" : "none" }}>
                <div className={styles.closeModal} onClick={closeModal}>
                    <CloseBtn icon={<IoCloseSharp size={24} />} />
                </div>
                <div className={styles.title}>
                    <Text text={`Contact for: ${serviceSendData.job}`} textSize={'twenty'} />
                </div>
                <div className={styles.socialIconB}>
                    <a target={"_blank"} href="https://T.me/+998994480500" className={`${styles.link} href`}>
                        <div className={styles.telegram}>
                            <img className={styles.socialIcon} src="/telegram.png" alt="" />        
                            <Text text={'Telegram'} textSize={'twenty'} />
                        </div>
                    </a>
                    <a target={"_blank"} href="https://wa.me/+998994480500" className={`${styles.link} href`}>
                        <div className={styles.whatsApp}>
                            <img className={styles.socialIcon} src="/whatsapp.png" alt="" />
                            <Text text={'Whatsapp'} textSize={'twenty'} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default observer(Social)
