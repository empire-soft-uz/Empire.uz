import { Backdrop } from '@mui/material'
import { message } from 'antd'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ArrowBackIcon, ArrowRight, CloseBig } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import styles from "./Calendly.module.css"

const Calendly = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { findDevForm, clearFindDevForm, } = useRootStore().tagsStore

    const back = () => {
        show("smartMach")
        hide("calendly")
    }
    const data = `Time To Build The Future%0A Name: ${findDevForm.name}%0A Work email: ${findDevForm.workEmail}%0A Skills: ${findDevForm.job}%0A Work Rate: ${findDevForm.workRate}%0A How Long: ${findDevForm.howLong}%0A Note: ${findDevForm.note}%0A Start Date: ${findDevForm.startDate}%0A File: ${findDevForm.file}%0A`

    const sendBot = async () => {
        show("loading")
        await axios({
            method: 'post',
            url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            hide("calendly")
            show("weWillContact")
            clearFindDevForm()
            hide("loading")
            message.success('We will contact you')
        }).catch(err => {
            message.error(`${err}`)
        })
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 5 }}
                open={visiable.calendly}
                onClick={() => hide("findDeveloper")}></Backdrop>
            <div className={styles.container} style={{ display: visiable.calendly ? "block" : "none" }}>
                <div className={styles.arrowRight} onClick={sendBot}>
                    <ArrowBackIcon color="#1DAC87" />
                </div>
                <div className={styles.arrowLeft} onClick={back}>
                    <ArrowBackIcon color="#1DAC87" />
                </div>
                <div className={styles.calendlyBox}>
                    <iframe style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000",
                        border: "none"
                    }} className={styles.iframe} src="https://calendly.com/empire-soft-net?background_color=ffffff&text_color=000000&primary_color=1dac87" frameBorder={0}></iframe>
                </div>
            </div>
        </>
    )
}

export default observer(Calendly)
