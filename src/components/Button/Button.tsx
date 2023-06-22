import React from 'react'
import Text from '../Text/Text'
import styles from './Button.module.css'
interface Props {
    title: string;
    titleColor?: string;
    onPress?: () => void;
    btnType: 'outline' | 'primary',
    padding?: string
}

const Button: React.FC<Props> = ({
    onPress,
    title,
    titleColor,
    btnType,
    padding
}) => {
    return (
        <div
            style={{
                padding: padding
            }}
            className={`${styles[btnType]}`} onClick={onPress}
        >
            <Text size={18} text={title} color={titleColor} />
        </div>
    )
}

export default Button
