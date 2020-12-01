import React from 'react'
import GreenLink from '../../../components/GreenLink'
import classes from './style.module.css'

const Sended = () => {
    return (
        <div className={classes.container}>
            <img src="/img/MensajeRevisaEmail.png" alt="Mensaje: Revisa tu correo"/>
            <img src='/img/EmailMessage.png' alt='Email enviado' className={classes.img} width="150" />
            <h1 className={classes.h1}>¡Tu cuenta en  iMoney ha sido creada con éxito!</h1>
            <p>¡Hemos enviado un correo para confirmar y registrar de tu cuenta. Si no recibes este mensaje, por favor contáctanos a través del WhatsApp en sitio.</p>    
            <span><GreenLink to="/login">Inicia Sesión</GreenLink> después de verificarlo.</span>    
        </div>
    )
}

export default Sended