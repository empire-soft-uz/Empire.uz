import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from "./SubmitApp.module.css"

const SubmitApp = () => {
    const { form, setForm, clearForm } = useRootStore().tagsStore
    const { show, hide } = useRootStore().visibleStore
    const data = `${form.name} submitted his application%0A Name: ${form.name}%0A Email: ${form.email}%0A He wants to contact us%0A`

    const sendBot = async () => {
        show("loading")
        if (form.name.length <= 1) {
            message.error('Please enter your name')
            return
        }
        await axios({
            method: 'post',
            url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            hide("loading")
            clearForm()
            message.success('We will contact you')
        }).catch(err => {
            message.error(`${err}`)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text text='Submit your application' transform={"uppercase"} textSize='forty' />
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <img src={ASSETS.man} />
                    <div className={styles.blur}></div>
                    <div className={styles.blurPerson}></div>
                </div>
                <div className={styles.rightBox}>
                    <Input
                        onChange={(e) => setForm(e.target.value, "name")}
                        placeholder='Name Surname'
                        value={form.name}
                    />
                    <Input
                        placeholder='Email'
                        value={form.email}
                        type={"eanil"}
                        onChange={(e) => setForm(e.target.value, "email")}
                    />
                    <div className={styles.submit}>
                        <ArrowRightButton onClick={sendBot} />
                    </div>
                </div>
            </div>
            <img src={ASSETS.back2} className={styles.back} />
        </div>
    )
}

export default observer(SubmitApp)
