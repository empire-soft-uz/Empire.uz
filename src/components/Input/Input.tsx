import React from 'react'
import styles from "./Input.module.css"
interface Props {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const Input: React.FC<Props> = ({
    placeholder,
    value,
    onChange,
    type
}) => {
    return (
        <>
            <input value={value} onChange={onChange} className={styles.input} type={type ? type : "text"} placeholder={placeholder} />
        </>
    )
}

export default Input
