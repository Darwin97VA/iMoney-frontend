import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import styles from './style.module.css'

export type ButtonSizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactElement | ReactElement[] | string;
    size: ButtonSizes;
    classes: string;
    width: string;
    style: React.CSSProperties
}

const Button = ({ children, size, classes, style, width, ...props }: ButtonProps) => (
    <button className={`${styles.button} ${size} ${classes}`} 
        style={{
            ...style,
            width: width || style.width
        }}
        {...props}>
        { children }
    </button>
)

const defaultProps: ButtonProps = {
    children: 'Enviar',
    size: 'medium',
    classes: '',
    width: '',
    style: {}
}

Button.defaultProps = defaultProps


export default Button