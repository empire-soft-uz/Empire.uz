import { Backdrop } from '@mui/material'
import { message } from 'antd'
import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { CloseBig, CloseSmall } from '../../assets/icons/Icons'
import { isValidEmail } from '../../helper/ValidationHelper'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import { ProgrammingLanguages } from '../../utils/dateBase'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Input from '../Input/Input'
import PLanguage from '../PLangugae/PLanguage'
import Text from '../Text/Text'
import styles from "./FindDeveloper.module.css"

const FindDeveloper = () => {
    const { visiable, hide, show } = useRootStore().visibleStore
    const { chooseTag, tags, removeTag, setfindDevForm, findDevForm, clearFindDevForm } = useRootStore().tagsStore

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
        setfindDevForm(event.target.value, "workEmail")
    };

    const next = () => {
        show("smartMach")
        hide("findDeveloper")
    }

    const closeFind = () => {
        hide("findDeveloper")
        clearFindDevForm()
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 6 }}
                open={visiable.findDeveloper}
                onClick={() => hide("findDeveloper")}></Backdrop>
            <div className={styles.container} style={{ display: visiable.findDeveloper ? "block" : "none" }}>
                <div className={styles.closeModal} onClick={closeFind}>
                    <CloseBig />
                </div>
                <div className={styles.title}>
                    <Text text='Time To Build The Future' lineHeight={60} textSize="fifty" />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.inputBox}>
                    <div className={styles.input}>
                        <Input
                            placeholder='Name'
                            value={findDevForm.name}
                            onChange={(e) => setfindDevForm(e.target.value, "name")}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            placeholder='Work Email Address'
                            value={findDevForm.workEmail}
                            onChange={handleChange}
                        />
                        <div className={styles.validation}>
                            {error ? <Text text={error} color={COLORS.red} textSize="fourteen" /> : null}
                        </div>
                    </div>
                </div>
                <div className={styles.tabs}>
                    {tags.map((e, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <Text text={e.name} family='FuturaBook' textSize='twenty' />
                                <div onClick={() => removeTag(e.id)} className={styles.close}>
                                    <CloseSmall />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.languagesBox}>
                    {ProgrammingLanguages.map((e, index) => {
                        return (
                            <PLanguage
                                key={index}
                                image={e.image}
                                name={e.name}
                                choosed={tags.every((item) => item.id !== e.id)}
                                onPress={() => chooseTag(e)}
                            />
                        )
                    })}
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton disabled={disabled}
                        onClick={next}
                    />
                </div>
            </div>
        </>
    )
}

export default observer(FindDeveloper)
