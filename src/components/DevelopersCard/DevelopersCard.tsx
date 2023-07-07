import { observer } from 'mobx-react-lite'
import React from 'react'
import { PhpIcon } from '../../assets/icons/Icons'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import IconComp from '../IconComp/IconComp'
import SkillIcon from '../SkillIcon/SkillIcon'
import Text from '../Text/Text'
import styles from "./DevelopersCard.module.css"

interface Props {
    name: string;
    job: string;
    onPress?: () => void;
    data?: any;
}

const DevelopersCard: React.FC<Props> = ({
    name,
    job,
    onPress,
    data
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img src={ASSETS.roytman} />
            </div>
            <div className={styles.title}>
                <Text text={name} textSize="twenty" />
                <Text family='FuturaBook' text={job} textSize="sixteen" color={COLORS.grey} />
            </div>
            <div style={{
                marginTop: "15px",
            }}>
                <Button padding='6px 50px' title='Expert in' btnType='primary' />
            </div>
            <div className={styles.skillsBox}>
                {data.slice(0, 4).map((i: any, index: any) => {
                    return (
                        <SkillIcon key={index} logo={i.skillsIcon} name={i.skillsName} type={'outline'} />
                    )
                })
                }
            </div>
            <button className={styles.viewBtn} onClick={onPress}>
                View Profile
            </button>
        </div>
    )
}

export default observer(DevelopersCard)
