import React from 'react'
import { UiIcon } from '../../assets/icons/Icons'
import { COLORS } from '../../utils/color'
import RowItem from '../RowItem/RowItem'
import Text from '../Text/Text'
import styles from './ServiceCard.module.css'
import { RiSendPlaneFill } from "react-icons/ri"

interface Props {
    name: string;
    text: string;
    icon: string,
    onPress?: () => void;
}

const ServiceCard: React.FC<Props> = ({
    name,
    icon,
    text,
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <RowItem text={name} imageUrl={icon} />
            <p className={styles.text}>
                {text}
            </p>
            <div className={styles.rightHoverBtn}>
                <RiSendPlaneFill className={styles.sendIcon} size={24} color='#1DAC87' />
            </div>
        </div>
    )
}

export default ServiceCard
