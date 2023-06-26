import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color';
import Text from '../Text/Text'
import styles from "./PLanguage.module.css"

interface Props {
    image: string;
    name: string;
    onPress?: () => void;
    choosed?: boolean;
}

const PLanguage: React.FC<Props> = ({
    image,
    name,
    onPress,
    choosed
}) => {

    return (
        <div className={`${styles.container} ${choosed ? styles.borderOn : styles.borderOff}`} onClick={onPress}>
            <img className={`${styles.image} ${choosed ? styles.grayOn : styles.grayOff}`} src={image} />
            <Text textSize='sixteen' text={name} color={COLORS.grey} />
        </div>
    )
}

export default PLanguage
