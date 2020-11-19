import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef, useState, MouseEvent, KeyboardEvent, LabelHTMLAttributes } from 'react'
import classes from './style.module.css'


type SetOption = Function
type OptionName = string

export interface OptionInterface {
    name: OptionName
    data?: any
}
interface OptionProps extends OptionInterface {
    setValue: SetOption
    optionSelected: OptionName
}
const Option = ({ setValue, optionSelected, ...option}: OptionProps) => {
    const { name } = option
    const _handleClick = () => {
        setValue(option)
    }
    return (
        <li onClick={_handleClick} className={`${classes.li} 
            ${optionSelected === name ? classes.selected : ''}`}>
            { name }
        </li>
    )
}
export interface SelectProps extends LabelHTMLAttributes<HTMLLabelElement>  {
    label: string,
    options: OptionInterface[],
    value: OptionInterface,
    setValue: SetOption,
    status?: 'normal' | 'invalid' | 'permitted'
}
const Select = ({ label, options, value, setValue, onClick, status='normal', ...props }: SelectProps) => {
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    
    const [open, setOpen] = useState<boolean>(false)
    const [moved, setMoved] = useState<boolean>(false)
    const _setValue = useCallback((value: any) => {
        setMoved(true)
        setValue(value)
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        const container = containerRef.current
        const handler = (e: Event) => {
            if(e.target !== container) {
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handler)
        return () => document.body.removeEventListener('click', handler)
    }, [])
    const _handleClick = (e: MouseEvent<HTMLLabelElement>) => { 
        e.stopPropagation()
        const header = headerRef.current
        if(e.target === header) {
            setOpen(!open)
        }
        onClick && onClick(e)
    }
    const _handleKey = (e: KeyboardEvent<HTMLLabelElement>) => e.key === 'Enter' && setOpen(!open)
    const _handleFocus = () => setOpen(true)
    const _handleBlur = () => setOpen(false)
    return (
        <label className={`field-container ${status} ${open ? 'focus' : ''}`} tabIndex={0} ref={containerRef} 
            onClick={_handleClick} onKeyUp={_handleKey} 
            onBlur={_handleBlur} onFocus={_handleFocus} {...props}>
            <div className={classes.header} ref={headerRef}>
                <span className={`field-label-movable ${moved ? 'moved' : 'none'}`}> { label } </span>
                <div className={classes.field}> 
                    <div>
                        { moved ? value.name : '' } 
                    </div>
                    <div>
                        <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} color={'var(--color-box)'} />
                    </div>
                </div>
            </div>
            <ul className={`${classes.ul} ${open ? `${classes.open} focus` : ''}`}>
                {
                    options.map((props: OptionInterface) => 
                        <Option setValue={_setValue} {...props}
                            optionSelected={value.name} key={props.name} />)
                }
            </ul>
        </label>
    )
}

export default Select