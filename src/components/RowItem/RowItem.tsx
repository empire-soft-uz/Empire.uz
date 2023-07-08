import React from 'react'
import { COLORS } from '../../utils/color';
import Text from '../Text/Text'
import styles from "./RowItem.module.css"
interface Props {
    text: string;
    imageUrl?: string;
    comment?: string;
}

const RowItem: React.FC<Props> = ({
    text,
    comment,
    imageUrl
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconBox}>
                <img className={styles.img} src={imageUrl} /> :
            </div>
            <div className={styles.textBox}>
                <Text text={text} textSize='twenty' />
                {comment ?
                    <Text text={comment} color={COLORS.grey} textSize='sixteen' family="FuturaBook" />
                    : null
                }
            </div>
        </div>
    )
}

export default RowItem
