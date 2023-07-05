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
    disabled
}) => {
    return (
        <button
            style={{
                padding: padding,
                width: width,
                margin: margin,
                cursor: disabled ? "not-allowed" : "pointer"
            }}
            className={`${styles[btnType]}`} onClick={onPress}
        >
            <Text textSize={titleSize ? titleSize : "eighteen"} text={title} color={titleColor} />
        </button>
    )
}

export default Button
