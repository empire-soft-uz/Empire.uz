import React from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import { ASSETS } from '../../utils/assetsRequires'
import ArrowRightButton from '../ArrowRightButton/ArrowRightButton'
import Input from '../Input/Input'
import Text from '../Text/Text'
import styles from "./SubmitApp.module.css"

const SubmitApp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text text='Submit your application' transform={"uppercase"} size={40} />
            </div>
            <div className={styles.content}>
                <div className={styles.leftBox}>
                    <img src={ASSETS.man} />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.blurPerson}></div>
                <div className={styles.rightBox}>
                    <Input placeholder='Name Surname' />
                    <Input placeholder='Email' />
                    <div className={styles.submit}>
                        <ArrowRightButton />
                    </div>
                </div>
            </div>
            <img src={ASSETS.back2} className={styles.back} />
        </div>
    )
}

export default SubmitApp
