import React, { useRef, ReactElement, LabelHTMLAttributes } from 'react'
import { ButtonSecondary } from '../'

interface ButtonFileProps extends LabelHTMLAttributes<HTMLLabelElement>  { 
    children?: (ReactElement | ReactElement[] | string) 
}

const ButtonFile = ({ children, style, ...props }: ButtonFileProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <label style={{display: 'flex', ...style}} {...props} >
            <ButtonSecondary style={{width: '100%'}} onClick={(e: { preventDefault: Function })=>{
                e.preventDefault()
                if(inputRef.current) {
                    inputRef.current.click()
                }
            }}>
                { children }
            </ButtonSecondary>
            <input type="file" name="file" tabIndex={-1} style={{
                overflow: 'hidden',
                height: 0,
                width: 0,
            }} ref={inputRef}/>
        </label>
    )
}

export default ButtonFile