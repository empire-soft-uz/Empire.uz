import { Backdrop } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ArrowBackIcon, ArrowRight, CloseBig } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import styles from "./Calendly.module.css"

const Calendly = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const next = () => {
        hide("calendly")
        show("smartMach")
    }
    const back = () => {
        show("findDeveloper")
        hide("calendly")
    }
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 5 }}
                open={visiable.calendly}
                onClick={() => hide("findDeveloper")}></Backdrop>
            <div className={styles.container} style={{ display: visiable.calendly ? "block" : "none" }}>
                <div className={styles.arrowRight} onClick={next}>
                    <ArrowBackIcon color="#3F4242" />
                </div>
                <div className={styles.arrowLeft} onClick={back}>
                    <ArrowBackIcon color="#3F4242" />
                </div>
                <div className={styles.calendlyBox}>
                    <iframe style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000"
                    }} className={styles.iframe} src="https://calendly.com/empire-soft?background_color=1a1a1a&text_color=ffffff&primary_color=1dac87" frameBorder={0}></iframe>
                </div>
            </div>
        </>
    )
}

export default observer(Calendly)
