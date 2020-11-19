import React, { useEffect } from 'react'
import GreenLink from '../../GreenLink'
import classes from './style.module.css'

const Login = () => {
    useEffect(() => {
        document.body.style.background = '#001C54'
        return () => { document.body.style.background = 'transparent' }
    }, [])
    return (
        <div className={classes.container}>
            <img src="/img/MensajeRevisaEmail.png" alt="Mensaje: Revisa tu correo"/>
            <img src='/img/EmailMessage.png' alt='Email enviado' className={classes.img} width="150" />
            <h1 className={classes.h1}>¡Tu cuenta en  iMoney ha sido creada con éxito!</h1>
            <p>¡Hemos enviado tu usuario y contraseña para confirmar tu correo electrónico. Si no recibes este mensaje, por favor contáctanos a través del WhatsApp en sitio.</p>    
            <span><GreenLink to="/login">Inicia Sesión</GreenLink> después de verificarlo.</span>    
        </div>
    )
}

export default Login