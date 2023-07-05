import React from 'react'
import styles from "./Avatar.module.css"
interface Props {
    imageUrl?: string;
    onPress?: () => void;
    active?: boolean;
}

const Avatar: React.FC<Props> = ({
    imageUrl,
    active,
    onPress
}) => {
    return (
        <div style={{ border: active ? "3px solid #1DAC87" : "" }} className={styles.container} onClick={onPress}>
            <img className={styles.image} src={imageUrl} />
        </div>
    )
}

export default Avatar
