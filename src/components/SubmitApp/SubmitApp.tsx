import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import { isValidEmail } from '../../helper/ValidationHelper'
import useRootStore from '../../hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from "./SubmitApp.module.css"

const SubmitApp = () => {
    const { form, setForm, clearForm } = useRootStore().tagsStore
    const { show, hide } = useRootStore().visibleStore
    const data = `${form.name} submitted his application%0A Name: ${form.name}%0A Email: ${form.email}%0A He wants to contact us%0A`

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);

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
        setForm(event.target.value, "email")
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
                hide("loading")
                clearForm()
                message.success('We will contact you')
            }).catch(err => {
                message.error(`${err}`)
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text text='Submit your application' family="BenzinBold" transform={"uppercase"} textSize='thirtySix' />
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
                    <div>
                        <Input
                            placeholder='Email'
                            value={form.email}
                            type={"eanil"}
                            onChange={handleChange}
                        />
                        <div className={styles.validation}>
                            {error ? <Text text={error} color={COLORS.red} textSize="fourteen" /> : null}
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <ArrowRightButton disabled={disabled} onClick={sendBot} />
                    </div>
                </div>
            </div>
            <img src={ASSETS.back2} className={styles.back} />
        </div>
    )
}

export default observer(SubmitApp)
