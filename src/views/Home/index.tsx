import React from 'react'
import GreenLink from '../../components/GreenLink'
import classes from './style.module.css'

const Home = () => {
    return (    
        <div className={classes.container}>
            <GreenLink to="/login">Login</GreenLink>
            <GreenLink to="/registro">Registro</GreenLink>
            <GreenLink to="/email">Correo de confirmación</GreenLink>
        </div>
    )
}

export default Home