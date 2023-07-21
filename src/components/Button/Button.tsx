import React from 'react'
import Text from '../Text/Text'
import styles from './Button.module.css'
interface Props {
    title: string;
    titleColor?: string;
    titleSize?: any;
    onPress?: () => void;
    btnType: 'outline' | 'primary',
    padding?: string,
    width?: string,
    margin?: string;
    disabled?: boolean;
    cursor?: string;
}

const Button: React.FC<Props> = ({
    onPress,
    title,
    titleColor,
    titleSize,
    btnType,
    padding,
    margin,
    width,
    disabled,
    cursor
}) => {
    return (
        <button
            style={{
                padding: padding,
                width: width,
                margin: margin,
                fontSize: titleSize,
                cursor: disabled ? "not-allowed" : cursor ? cursor : "pointer",
                color: titleColor
            }}
            className={`${styles[btnType]}`} onClick={onPress}
        >
            {title}
        </button>
    )
}

export default Button
