import { observer } from 'mobx-react-lite'
import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import Text from '../Text/Text'
import TranslationDrop from '../TranslationDrop/TranslationDrop'
import styles from "./Header.module.css"

const Header = () => {
    const { show } = useRootStore().visibleStore
    return (
        <div className={styles.container}>
            <a href="/" className='href'>
                <Text cursor='pointer' text='Logo' family='FuturaBold' color={COLORS.white} size={36} />
            </a>
            <div className={styles.rightBox}>
                <a href="#services" className="href">
                    <Text cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="#about-us" className='href'>
                    <Text cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                <Text cursor='pointer' text='Blog' color={COLORS.white} />
                <Button onPress={() => show("findDeveloper")} btnType='outline' title='FIND A DEVELOPER' titleColor={COLORS.green} />
                <TranslationDrop />
            </div>
        </div>
    )
}

export default observer(Header)
