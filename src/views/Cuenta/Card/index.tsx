import React, { ReactElement } from 'react'
import classes from './style.module.css'

interface CardProps {
    title: string,
    children: ReactElement | ReactElement[] | string,
    img: string
}
const Card = ({ title, children = '', img }: CardProps) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}> { title } </div>
            <img className={classes.img} src={img} alt="imagen" />
            { children }
        </div>
    )
}

export default Card