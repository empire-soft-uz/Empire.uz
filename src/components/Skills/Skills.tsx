import React from 'react'
import { PhpIcon } from '../../assets/icons/Icons'
import { COLORS } from '../../utils/color'
import IconComp from '../IconComp/IconComp'
import SkillIcon from '../SkillIcon/SkillIcon'
import styles from "./Skills.module.css"
import Text from '../Text/Text'
import { observer } from 'mobx-react-lite'
import useRootStore from '../../Hooks/useRootStore'
import { toJS } from 'mobx'
interface Props {

}

const Skills = () => {
    const { userData } = useRootStore().userStore

    return (
        <div className={styles.container}>
            <div className={styles.skills}>
                <Text text='Skills' textSize='twentyTwo' />
                <Text margin='15px 0 0 0' text='Expertise' textSize='eighteen' color={COLORS.grey} />
                {userData.skills.filter((e) => e.expertise === true).map((i, index) => {
                    return (
                        <div key={index} className={styles.itemsOne}>
                            <SkillIcon type='primary' logo={i.skillsIcon} name={i.skillsName} />
                            <Text textSize='fourteen' color={COLORS.grey} text={'8 years'} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.allSkills}>
                <Text text='All Skills' textSize='eighteen' color={COLORS.grey} />
                <div className={styles.itemsTwo}>
                    {userData.skills.map((i, index) => {
                        return (
                            <SkillIcon key={index} logo={i.skillsIcon} name={i.skillsName} type='outline' />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default observer(Skills)
