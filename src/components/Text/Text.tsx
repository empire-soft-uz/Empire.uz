import React from 'react'
import styles from "./Text.module.css"
interface Props {
    text: string;
    color?: string;
    margin?: string;
    textAlign?: any;
    family?: string;
    positon?: any;
    zIndex?: string;
    transform?: any;
    whiteSpace?: any;
    cursor?: string;
    onPress?: () => void;
    lineHeight?: number;
    id?: string;
    WebkitTextStroke?: string;
    textSize: 'fourteen' | 'sixteen' | 'eighteen' | 'twenty' | 'twentyTwo' | 'twentyEight' | 'thirtySix' | 'forty' | 'fifty' | 'sixty' | 'seventy'
}

const Text: React.FC<Props> = ({
    text,
    color,
    margin,
    textAlign,
    family,
    positon,
    zIndex,
    id,
    transform,
    whiteSpace,
    cursor,
    onPress,
    lineHeight,
    textSize,
    WebkitTextStroke
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
                textAlign: textAlign,
                position: positon,
                zIndex: zIndex,
                textTransform: transform,
                whiteSpace: whiteSpace,
                cursor: cursor,
                lineHeight: `${lineHeight}px`,
                WebkitTextStroke: WebkitTextStroke
            }}>
            {text}
        </p>
    )
}

export default Text
