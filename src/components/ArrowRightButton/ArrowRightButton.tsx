import React from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import styles from "./ArrowRightButton.module.css"
interface Props {
    onClick?: () => void;
    disabled?: boolean
}

const ArrowRightButton: React.FC<Props> = ({
    onClick,
    disabled
}) => {
    return (
        <button disabled={disabled} style={{ cursor: disabled ? "not-allowed" : "pointer" }} className={styles.arrowRight} onClick={onClick}>
            <ArrowRight />
        </button>
    )
}

export default ArrowRightButton
