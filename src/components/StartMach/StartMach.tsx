import { Backdrop } from '@mui/material'
import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ArrowBackIcon, PlusIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import { HowLong, WorkRate } from '../../utils/dateBase'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Text from '../Text/Text'
import styles from "./StartMach.module.css"

const StartMach = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { choseWorkRate, workRate, choseHowlong, howLong, findDevForm, setfindDevForm, clearFindDevForm } = useRootStore().tagsStore
    console.log("findDevForm", toJS(findDevForm));
    const data = `Time To Build The Future%0A Work Email: ${findDevForm.workEmail}%0A Confirm Email: ${findDevForm.confirmEmail}%0A Job: ${findDevForm.job}%0A Work Rate: ${findDevForm.workRate}%0A How Long: ${findDevForm.howLong}%0A Start Date: ${findDevForm.startDate}%0A
    `

    const sendBot = async () => {
        // setLoading(true)
        if (findDevForm.workEmail.length <= 1) {
            message.error('Please enter your work email')
            return
        }
        await axios({
            method: 'post',
            url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            message.success('We will contact you')
            hide("smartMach")
            show("weWillContact")
            clearFindDevForm()
        }).catch(err => {
            message.error(`${err}`)
        })

        // setLoading(false)
    }

    const back = () => {
        show("findDeveloper")
        hide("smartMach")
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
                    <div className={styles.arrowBack} onClick={back}>
                        <ArrowBackIcon />
                    </div>
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
                    <input value={findDevForm.startDate}
                        placeholder='Start Date'
                        className={styles.date} type="date"
                        onChange={(e) => setfindDevForm(e.target.value, "startDate")}
                    />
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton
                        disabled={findDevForm.workRate.length === 0 &&
                            findDevForm.howLong.length === 0 &&
                            findDevForm.startDate.length === 0 ? true : false} onClick={sendBot}
                    />
                </div>
            </div>
        </>
    )
}

export default observer(StartMach)
