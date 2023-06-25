import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Text from '../Text/Text'
import styles from "./BlogInfo.module.css"

interface Props {
    imageUrl: string;
    date: string,
    title: string;
    text: string;
}

const BlogInfo: React.FC<Props> = ({
    date,
    imageUrl,
    text,
    title
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img className={styles.img} src={imageUrl} />
                <div className={styles.date}>
                    <Text text={date} />
                </div>
            </div>
            <div className={styles.textBox}>
                <Text margin='20px 0 0 0' size={18} text={title} />
                <Text margin='20px 0 0 0' color={COLORS.grey} family='FuturaBook' size={14} text={text} />
                <Text margin='20px 0 0 0' color={COLORS.grey} family='FuturaBook' size={14} text={text} />
                <Text margin='20px 0 0 0' color={COLORS.grey} family='FuturaBook' size={14} text={text} />
            </div>
        </div>
    )
}

export default BlogInfo
