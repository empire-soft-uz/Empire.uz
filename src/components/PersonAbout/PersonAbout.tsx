import React from 'react'
import Text from '../Text/Text'
import styles from "./PersonAbout.module.css"
interface Props {
    title: string;
    text: string;
}

const PersonAbout: React.FC<Props> = ({
    title,
    text
}) => {
    return (
        <div className={styles.container}>
            <Text text={title} textSize={'twentyTwo'} />
            <Text margin='10px 0 0 0' text={text} textSize={'fourteen'} />
        </div>
    )
}

export default PersonAbout
