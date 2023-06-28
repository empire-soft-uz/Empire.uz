import { Backdrop } from '@mui/material'
import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ArrowBackIcon, FileUpload, PlusIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { storage } from '../../services/Firebase'
import { COLORS } from '../../utils/color'
import { HowLong, WorkRate } from '../../utils/dateBase'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Text from '../Text/Text'
import styles from "./StartMach.module.css"

const StartMach = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { choseWorkRate, workRate, choseHowlong, howLong, findDevForm, setfindDevForm } = useRootStore().tagsStore
    const next = () => {
        show("calendly")
        hide("smartMach")
    }

    const back = () => {
        show("findDeveloper")
        hide("smartMach")
    }
    // const [file, setFile] = useState('')

    // const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files?.length) {
    //         const fileRef = storage.ref('/file/${ file.name}').put(e.target.files[0])
    //             .on("state_changed", message.success("succes"))
    //         fileRef()
    //         console.log(file);
    //     }
    // }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 4 }}
                open={visiable.smartMach}
                onClick={() => hide("smartMach")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.smartMach ? "block" : "none" }}>
                <div className={styles.title}>
                    <div className={styles.arrowBack} onClick={back}>
                        <ArrowBackIcon />
                    </div>
                    <Text text='START MACHING NOW!' lineHeight={60} textSize='fifty' />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.work}>
                    <Text text='Work Rate' color={COLORS.grey} textSize='eighteen' family="FuturaBook" />
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
                    <Text text='How Long Will You Need This Developer?' color={COLORS.grey} textSize='eighteen' family="FuturaBook" />
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
                    <label className={styles.label}>
                        <Text text='Files' color={COLORS.grey} textSize='eighteen' family="FuturaBook" />
                        <FileUpload />
                        <input
                            className={styles.fileInput}
                            type="file"
                        // onChange={(e) => uploadFile(e)}
                        />
                    </label>
                    <div className={styles.notesBox}>
                        <textarea
                            rows={4}
                            className={styles.notes}
                            placeholder='Note something'
                            value={findDevForm.note}
                            onChange={(e) => setfindDevForm(e.target.value, "note")}
                        />
                    </div>
                </div>
                <div className={styles.dateBox}>
                    <input
                        value={findDevForm.startDate}
                        placeholder='Start Date'
                        className={styles.date}
                        type="date"
                        onChange={(e) => setfindDevForm(e.target.value, "startDate")}
                    />
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton
                        disabled={findDevForm.workRate.length === 0 &&
                            findDevForm.howLong.length === 0 &&
                            findDevForm.startDate.length === 0 ? true : false} onClick={next}
                    />
                </div>
            </div>
        </>
    )
}

export default observer(StartMach)
