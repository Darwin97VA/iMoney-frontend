import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FormEvent, InputHTMLAttributes, useState } from 'react'
import classes from './style.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string;
    status?: 'normal' | 'invalid' | 'permitted';
    setValue: Function;
    icon?: IconDefinition;
}

const Input = ({ label, placeholder=label, disabled=false, required=true, icon, status='normal', value='', setValue, ...props }: InputProps) => {
    const [finalPlaceholder, setFinalPlaceholder] = useState('')
    const [focus, setFocus] = useState(false)
    const _handleFocus = () => {
        setFocus(true)
        setFinalPlaceholder(placeholder)
    }
    const _handleChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const _handleBlur = () => {
        setFocus(false)
        setFinalPlaceholder('')
    }
    const isFilled = focus || (value !== '')
    return (
        <label className={`field-container ${disabled ? classes.disabled : ''} ${focus ? 'focus' : ''} ${status}`}>
            { label ? <div className={` ${classes.label} field-label-movable ${isFilled ? 'moved' : ''}`}> { label } </div> : null }
            <div className={classes.content}>

                <input type="text" className={classes.input} disabled={disabled} 
                    placeholder={finalPlaceholder} required={required}
                    onFocus={_handleFocus} onChange={_handleChange}
                    onBlur={_handleBlur} value={value}
                    {...props} />

                { icon ? <FontAwesomeIcon icon={icon} /> : null }
                
            </div>
        </label>
    )
}

export default Input