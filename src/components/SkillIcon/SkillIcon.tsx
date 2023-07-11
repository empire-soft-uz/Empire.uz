import React from 'react'
import Text from '../Text/Text'
import styles from "./Skill.module.css"
interface Props {
    logo?: string;
    name: string;
    type: 'primary' | 'outline'
}

const SkillIcon: React.FC<Props> = ({
    logo,
    name,
    type
}) => {
    return (
        <div className={`${styles.container} ${styles[type]}`}>
            {logo ?
                <img className={styles.logo} src={logo} /> :
                null
            }
            <Text whiteSpace={"nowrap"} textSize='fourteen' transform={"capitalize"} text={name} />
        </div>
    )
}

export default SkillIcon
