import React, { InputHTMLAttributes, useState } from 'react'
import classes from './style.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string;
}

const Input = ({ label, placeholder=label, disabled=false, required=true, ...props }: InputProps) => {
    const [finalPlaceholder, setFinalPlaceholder] = useState('')
    return (
        <label className={`${classes.container} ${disabled && classes.disabled}`}>
            <input type="text" className={classes.input} disabled={disabled} 
                placeholder={finalPlaceholder} required={required}
                onFocus={() => setFinalPlaceholder(placeholder)} 
                onBlur={() => setFinalPlaceholder('')}
                {...props} />
            { label ? <div className={classes.label}> { label } </div> : null }
        </label>
    )
}

export default Input