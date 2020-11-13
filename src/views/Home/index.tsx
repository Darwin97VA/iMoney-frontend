import React from 'react'
import GreenLink from '../../components/GreenLink'
import classes from './style.module.css'

const Home = () => {
    return (    
        <div className={classes.container}>
            <GreenLink to="/registro">1 Registro</GreenLink>
            <GreenLink to="/email">2 Correo de confirmación</GreenLink>
            <GreenLink to="/cuenta">3 Cuenta</GreenLink>
            <GreenLink to="/login">4 Login</GreenLink>
        </div>
    )
}

export default Home