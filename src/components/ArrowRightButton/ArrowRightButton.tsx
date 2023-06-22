import React from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import styles from "./ArrowRightButton.module.css"
interface Props {
    onClick?: () => void
}

const ArrowRightButton: React.FC<Props> = ({
    onClick
}) => {
    return (
        <div className={styles.arrowRight} onClick={onClick}>
            <ArrowRight />
        </div>
    )
}

export default ArrowRightButton
