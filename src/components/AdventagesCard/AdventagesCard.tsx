import React from 'react'
import { UiIcon } from '../../assets/icons/Icons'
import { COLORS } from '../../utils/color'
import RowItem from '../RowItem/RowItem'
import Text from '../Text/Text'
import styles from './AdventagesCard.module.css'

interface Props {
    name: string;
    text: string;
    icon: React.FC
}

const AdventagesCard: React.FC<Props> = ({
    name,
    icon,
    text
}) => {
    return (
        <div className={styles.container}>
            <RowItem text={name} icon={icon} />
            <Text
                color={COLORS.grey}
                text={text}
                textSize="sixteen"
                family="FuturaBook"
                margin='10px 0 0 0'
            />
        </div>
    )
}

export default AdventagesCard
