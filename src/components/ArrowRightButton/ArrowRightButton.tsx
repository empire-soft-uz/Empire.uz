import React from 'react'
import { ArrowRight } from '../../assets/icons/Icons'
import styles from "./ArrowRightButton.module.css"
import { HiOutlineArrowRight } from "react-icons/hi"
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
            <span className={styles.span}></span>
            <HiOutlineArrowRight className={styles.arrowIcon} size={38} />
        </button>
    )
}

export default ArrowRightButton
