import { observer } from 'mobx-react-lite'
import React from 'react'
import { BackIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import styles from "./UpBtn.module.css"

const UpBtn = () => {
    const { visiable } = useRootStore().visibleStore
    const EventScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <button onClick={EventScrollTop} className={styles.btn} style={{ display: visiable.upBtn ? "block" : "none" }}>
            <BackIcon />
        </button>
    )
}

export default observer(UpBtn)
