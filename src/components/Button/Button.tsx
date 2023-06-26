import React from 'react'
import Text from '../Text/Text'
import styles from './Button.module.css'
interface Props {
    title: string;
    titleColor?: string;
    onPress?: () => void;
    btnType: 'outline' | 'primary',
    padding?: string,
    width?: string,
    margin?: string;
}

const Button: React.FC<Props> = ({
    onPress,
    title,
    titleColor,
    btnType,
    padding,
    margin,
    width
}) => {
    return (
        <div
            style={{
                padding: padding,
                width: width,
                margin: margin
            }}
            className={`${styles[btnType]}`} onClick={onPress}
        >
            <Text textSize='eighteen' text={title} color={titleColor} />
        </div>
    )
}

export default Button
