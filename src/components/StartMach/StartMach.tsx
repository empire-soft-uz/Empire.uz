import { Backdrop } from '@mui/material'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { PlusIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import { HowLong, WorkRate } from '../../utils/dateBase'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Text from '../Text/Text'
import styles from "./StartMach.module.css"

const StartMach = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { choseWorkRate, workRate, choseHowlong, howLong } = useRootStore().tagsStore

    const next = () => {
        hide("smartMach")
        show("weWillContact")
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 4 }}
                open={visiable.smartMach}
                onClick={() => hide("smartMach")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.smartMach ? "block" : "none" }}>
                <div className={styles.title}>
                    <Text text='START MACHING NOW!' lineHeight={60} size={50} />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.work}>
                    <Text text='Work Rate' color={COLORS.grey} size={18} family="FuturaBook" />
                    <div className={styles.categoryTime}>
                        {WorkRate.map((e, index) => {
                            return (
                                <button style={{
                                    border: workRate.id === e.id ? "1px solid #1DAC87" : "1px solid #2E2E2E"
                                }}
                                    onClick={() => choseWorkRate(e)}
                                    key={index}
                                    className={styles.btn}>{e.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.developer}>
                    <Text text='How Long Will You Need This Developer?' color={COLORS.grey} size={18} family="FuturaBook" />
                    <div className={styles.categoryTime}>
                        {HowLong.map((e, index) => {
                            return (
                                <button
                                    style={{
                                        border: howLong.id === e.id ? "1px solid #1DAC87" : "1px solid #2E2E2E"
                                    }}
                                    key={index}
                                    onClick={() => choseHowlong(e)}
                                    className={styles.btn}>{e.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.developer}>
                    <Text text='Notes/Files' color={COLORS.grey} size={18} family="FuturaBook" />
                    <div className={styles.upload}>
                        <label className={styles.label}>
                            <PlusIcon />
                            <input className={styles.fileInput} type="file" />
                        </label>
                    </div>
                </div>
                <div className={styles.dateBox}>
                    <input placeholder='Start Date' className={styles.date} type="date" />
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton onClick={next} />
                </div>
            </div>
        </>
    )
}

export default observer(StartMach)
