import { Backdrop } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Text from '../Text/Text'
import styles from "./WeWillContact.module.css"

const WeWillContact = () => {
    const { visiable, hide } = useRootStore().visibleStore
    const next = () => {
        hide('findDeveloper')
        hide("smartMach")
        hide("weWillContact")
    }
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 4 }}
                open={visiable.weWillContact}
                onClick={() => hide("weWillContact")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.weWillContact ? "block" : "none" }}>
                <div className={styles.title}>
                    <Text text='We will contact you' lineHeight={60} size={70} />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.footer}>
                    <ArrowRightButton onClick={next} />
                </div>
            </div>
        </>
    )
}

export default observer(WeWillContact)
