import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.css'

interface GreenLinkProps {
    to: string,
    children: ReactElement | string
}
const GreenLink = ({children, to}: GreenLinkProps) => 
    <Link to={to} className={classes.link}>{children}</Link>

export default GreenLink