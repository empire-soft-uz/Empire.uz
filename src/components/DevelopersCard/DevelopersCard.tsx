import React from 'react'
import { PhpIcon } from '../../assets/icons/Icons'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import IconComp from '../IconComp/IconComp'
import Text from '../Text/Text'
import styles from "./DevelopersCard.module.css"

interface Props {
    name: string;
    job: string;
    skillsIcon: React.FC;
    skillsName: string;
}

const DevelopersCard: React.FC<Props> = ({
    name,
    job,
    skillsIcon,
    skillsName
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img src={ASSETS.roytman} />
            </div>
            <div className={styles.title}>
                <Text text={name} size={20} />
                <Text family='FuturaBook' text={job} size={16} color={COLORS.grey} />
            </div>
            <div style={{
                marginTop: "15px"
            }}>
                <Button padding='6px 50px' title='Expert in' btnType='primary' />
            </div>
            <div className={styles.skillsBox}>
                <IconComp icon={skillsIcon} name={skillsName} />
            </div>
            <button className={styles.viewBtn}>
                View Profile
            </button>
        </div>
    )
}

export default DevelopersCard
