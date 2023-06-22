import React from 'react'
import { COLORS } from '../../utils/color';
import Text from '../Text/Text'
import styles from "./RowItem.module.css"
interface Props {
    text: string;
    icon?: React.FC;
    imageUrl?: string;
    comment?: string;
}

const RowItem: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconBox}>
                {props.imageUrl ?
                    <img className={styles.img} src={props.imageUrl} /> :
                    null
                }
                {props.icon ? <props.icon /> : null}
            </div>
            <div className={styles.textBox}>
                <Text text={props.text} size={20} />
                {props.comment ?
                    <Text text={props.comment} color={COLORS.grey} size={16} family="FuturaBook" />
                    : null
                }
            </div>
        </div>
    )
}

export default RowItem
