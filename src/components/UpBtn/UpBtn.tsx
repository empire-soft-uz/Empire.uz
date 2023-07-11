import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { BackIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import styles from "./UpBtn.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowUp } from "react-icons/io"

const UpBtn = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { visiable } = useRootStore().visibleStore
    const EventScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <button data-aos="fade-up"
            data-aos-duration="1500" onClick={EventScrollTop} className={styles.btn} style={{ display: visiable.upBtn ? "block" : "none" }}>
            <IoIosArrowUp size={24} />
        </button>
    )
}

export default observer(UpBtn)
