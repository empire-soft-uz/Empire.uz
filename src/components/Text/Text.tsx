import React from 'react'
import styles from "./Text.module.css"
interface Props {
    text: string;
    color?: string;
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
    textSize: 'fourteen' | 'sixteen' | 'eighteen' | 'twenty' | 'twentyTwo' | 'twentyEight' | 'thirtySix' | 'forty' | 'fifty' | 'sixty' | 'seventy'
}

const Text: React.FC<Props> = ({
    text,
    color,
    margin,
    family,
    positon,
    zIndex,
    id,
    transform,
    whiteSpace,
    cursor,
    onPress,
    lineHeight,
    textSize
}) => {
    return (
        <p
            id={id}
            className={`${styles.text} ${styles[textSize]}`}
            onClick={onPress}
            style={{
                margin: margin,
                color: color ? color : "#fff",
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
