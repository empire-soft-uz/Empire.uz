import React from 'react'
import styles from "./Input.module.css"
interface Props {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
    placeholder,
    value,
    onChange
}) => {
    return (
        <>
            <input value={value} onChange={onChange} className={styles.input} type="text" placeholder={placeholder} />
        </>
    )
}

export default Input
