import React from 'react'
import styles from "./Text.module.css"
interface Props {
    text: string;
    color?: string;
    size?: number;
    margin?: string;
    family?: string;
    positon?: any;
    zIndex?: string;
    transform?: any;
    whiteSpace?: any;
    cursor?: string;
    onPress?: () => void;
    lineHeight?: number;
    id?: string
}

const Text: React.FC<Props> = ({
    text,
    color,
    margin,
    size,
    family,
    positon,
    zIndex,
    id,
    transform,
    whiteSpace,
    cursor,
    onPress,
    lineHeight
}) => {
    return (
        <p
            id={id}
            className={styles.text}
            onClick={onPress}
            style={{
                fontSize: `${size}px`,
                margin: margin,
                color: color,
                fontFamily: family,
                position: positon,
                zIndex: zIndex,
                textTransform: transform,
                whiteSpace: whiteSpace,
                cursor: cursor,
                lineHeight: `${lineHeight}px`
            }}>
            {text}
        </p>
    )
}

export default Text
