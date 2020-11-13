import React, { useState } from 'react'
import GreenLink from '../../../components/GreenLink'
import Button from '../../../components/Button'
import Input from  '../../../components/Input'
import Logo from  '../../../components/Logo'
import classes from './style.module.css'


const FormLogin = ({ addSubmit }: { addSubmit: Function}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addSubmit()
    }
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Logo />
                <h1 style={{textAlign: 'center', marginTop: '1em'}}>Iniciar sesión</h1>
            </header>
            <form className={classes.form} onSubmit={_handleSubmit}>
                <Input label="Correo" type="email" value={user}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)} />
                <Input label="Contraseña" type="password" value={pass} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)} />
                <Button type="submit" style={{margin: 'auto', width: '300px', fontSize: '16px'}} >Entrar</Button>
            </form>
            <footer className={classes.footer}>
                <GreenLink to="/login">¿Olvidaste tu contraseña?</GreenLink>
                <span>¿No tienes una cuenta?</span>
                <span>¡Crea una <GreenLink to="/registro">aquí</GreenLink>!</span>
            </footer>
        </div>
    )
}

export default FormLogin