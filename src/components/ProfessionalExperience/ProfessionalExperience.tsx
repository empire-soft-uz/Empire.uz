import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import SkillIcon from '../SkillIcon/SkillIcon'
import Text from '../Text/Text'
import styles from "./ProfessionalExperience.module.css"

const ProfessionalExperience = () => {
    const { userData } = useRootStore().userStore
    return (
        <div className={styles.container}>
            <Text text='Professional Experience' textSize='twenty' />
            {userData.experience.map((item, index) => {
                return (
                    <div className={styles.content} key={index}>
                        <div className={styles.title}>
                            <>
                                <div className={styles.name}>
                                    <Text text={item.title} textSize='eighteen' />
                                    <Text whiteSpace={"nowrap"} text={item.time} textSize='sixteen' color={COLORS.grey} />
                                </div>
                                <div className={styles.skillType}>
                                    <SkillIcon name={item.type} type={'outline'} />
                                </div>
                            </>
                        </div>
                        <div className={styles.ul}>
                            {item.info.map((i, index) => {
                                return (
                                    <li key={index}>{i.text}</li>
                                )
                            })}
                        </div>
                        <div className={styles.skillsBox}>
                            <div className={styles.skills}>
                                {item.skills.map((i, index) => {
                                    return (
                                        <SkillIcon key={index} logo={i.icon} name={i.name} type={'outline'} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ProfessionalExperience
