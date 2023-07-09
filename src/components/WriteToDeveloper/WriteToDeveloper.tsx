import { Backdrop } from '@mui/material'
import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { CloseBig, CloseSmall } from '../../assets/icons/Icons'
import { isValidEmail } from '../../helper/ValidationHelper'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from "./WriteToDeveloper.module.css"

const WriteToDeveloper = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { setServiceSendMessage, serviceSendData, clearServiceSendDevForm } = useRootStore().userStore

    const data = `Services%0A Name: ${serviceSendData.name}%0A Email: ${serviceSendData.email}%0A To: ${serviceSendData.job}`

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [nameError, setNameError] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (event.target.value.length === 0) {
            setError(null)
            setDisabled(true)
        } else if (!isValidEmail(event.target.value)) {
            setError('Email is invalid' as never);
            setDisabled(true)
        } else {
            setError(null);
            setDisabled(false)
        }
        setServiceSendMessage(event.target.value, "email")
    };
    const sendBot = async () => {
        if (!disabled) {
            show("loading")
            await axios({
                method: 'post',
                url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                clearServiceSendDevForm()
                hide("writeToDev")
                hide("loading")
                show("weWillContact")
                message.success('Thank you for contacting. We will reach you soon!')
            }).catch(err => {
                message.error(`${err}`)
                hide("loading")
            })
        } else {
            message.error("Email is invalid")
            hide("loading")
        }
    }
    const closeModal = () => {
        clearServiceSendDevForm()
        setError(null)
        hide("writeToDev")
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 8 }}
                open={visiable.writeToDev}
                onClick={() => hide("writeToDev")}
            ></Backdrop>
            <div className={styles.container} style={{ display: visiable.writeToDev ? "block" : "none" }}>
                <div className={styles.closeModal} onClick={closeModal}>
                    <CloseSmall />
                </div>
                <div className={styles.mediaCenter}>
                    <Text text={`Send To: ${serviceSendData.job}`} textSize={'twenty'} />
                    <div className={styles.title}>
                        <div>
                            <Input value={serviceSendData.name} onChange={(e) => setServiceSendMessage(e.target.value, "name")} placeholder='Enter your name' />
                            <div className={styles.validation}>
                                {nameError ? <Text text={nameError} color={COLORS.red} textSize="fourteen" /> : null}
                            </div>
                        </div>
                        <div>
                            <Input type='email' value={serviceSendData.email} onChange={handleChange} placeholder='Enter your email' />
                            <div className={styles.validation}>
                                {error ? <Text text={error} color={COLORS.red} textSize="fourteen" /> : null}
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <ArrowRightButton disabled={disabled} onClick={sendBot} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(WriteToDeveloper)
