import React from 'react'
import { UiIcon } from '../../assets/icons/Icons'
import { COLORS } from '../../utils/color'
import RowItem from '../RowItem/RowItem'
import Text from '../Text/Text'
import styles from './ServiceCard.module.css'

interface Props {
    name: string;
    text: string;
    icon: React.FC
}

const ServiceCard: React.FC<Props> = ({
    name,
    icon,
    text
}) => {
    return (
        <div className={styles.container}>
            <RowItem text={name} icon={icon} />
            <Text
                textSize='sixteen'
                margin='0 0 0 60px'
                color={COLORS.grey}
                text={text}
                family="FuturaBook"
            />
        </div>
    )
}

export default ServiceCard
