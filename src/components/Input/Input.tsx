import React from 'react'
import styles from "./Input.module.css"
interface Props {
    placeholder?: string;
    onChange?: (e: any) => void
}

const Input: React.FC<Props> = ({
    placeholder,
    onChange
}) => {
    return (
        <>
            <input onChange={onChange} className={styles.input} type="text" placeholder={placeholder} />
        </>
    )
}

export default Input
