import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import ButtonFile from './ButtonFile'
import styles from './style.module.css'

export type ButtonSizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactElement | ReactElement[] | string;
    size: ButtonSizes;
    classes: string;
    width: string;
    style: React.CSSProperties;
}

const Button = ({ children, classes, style, width, ...props }: ButtonProps) => (
    <button className={`${styles.button} ${classes} ${styles.btnPrimary}`} 
        style={{
            ...style,
            fontSize: '1.1em',
            width: width || style.width
        }}
        {...props}>
        { children }
    </button>
)


const ButtonPrimary = ({classes, ...props}: ButtonProps) => 
    <Button classes={`${styles.btnPrimary} ${classes}`} {...props} />

const ButtonSecondary = ({ classes, ...props}: any) => 
    <Button classes={`${styles.btnSecondary} ${classes}`} {...props} />

export { ButtonFile, ButtonPrimary, ButtonSecondary }

const defaultProps: ButtonProps = {
    children: 'Enviar',
    size: 'medium',
    classes: '',
    width: '',
    style: {}
}

Button.defaultProps = defaultProps


export default Button