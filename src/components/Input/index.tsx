import React, { InputHTMLAttributes, useState } from 'react'
import classes from './style.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string;
}

const Input = ({ label, placeholder=label, ...props }: InputProps) => {
    const [finalPlaceholder, setFinalPlaceholder] = useState('')
    return (
        <label className={classes.container}>
            <input type="text" className={classes.input} {...props} placeholder={finalPlaceholder} 
                onFocus={() => setFinalPlaceholder(placeholder)} 
                onBlur={() => setFinalPlaceholder('')} />
            { label ? <div className={classes.label}> { label } </div> : null }
        </label>
    )
}

export default Input