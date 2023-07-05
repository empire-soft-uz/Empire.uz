import React from 'react'
import { PhpIcon } from '../../assets/icons/Icons'
import Text from '../Text/Text'
import styles from "./IconComp.module.css"

interface Props {
    icon: string;
    name: string;
}

const IconComp: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.icons} src={props.icon} alt="" />
            <Text textSize='fourteen' text={props.name} transform={"uppercase"} />
        </div>
    )
}

export default IconComp
