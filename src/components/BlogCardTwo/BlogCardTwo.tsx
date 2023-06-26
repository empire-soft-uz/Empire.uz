import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import Text from '../Text/Text'
import styles from "./BlogCardTwo.module.css"
interface Props {
    image: string;
    text: string;
    date: string;
    onPress?: () => void;
}

const BlogCardTwo: React.FC<Props> = ({
    date,
    image,
    text,
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <div className={styles.textBox}>
                <Text textSize='eighteen' margin='0 0 20px 0' lineHeight={18} text={text} />
            </div>
            <img className={styles.image} src={image} />
            <div className={styles.date}>
                <Text textSize='fourteen' text={date} family='FuturaBook' />
            </div>
        </div>
    )
}

export default BlogCardTwo
