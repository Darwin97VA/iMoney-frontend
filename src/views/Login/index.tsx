import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from  '../../components/Input/index'
import { Isotipo } from  '../../components/Logo'
import classes from './style.module.css'


const FormLogin = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Bienvenido a iMoney Perú!')
    }
    return (
        <div className={classes.containerAll}>
            <div className={classes.container}>
                <header className={classes.header}>
                    <Isotipo color="blue" width="150" />
                    <h1 style={{textAlign: 'center', marginTop: '1em', fontWeight:100, display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <span>Bienvenido a <strong>iMoney</strong></span>
                        <strong> Inicia sesión </strong>
                    </h1>
                </header>
                <form className={classes.form} onSubmit={_handleSubmit}>
                    <Input label="Correo" type="email" value={user} setValue={setUser} icon={faEnvelope} />
                    <Input label="Contraseña" type="password" value={pass} setValue={setPass} icon={faKey} />
                    <Button type="submit" style={{margin: 'auto', width: '300px', fontSize: '16px'}} >ENTRAR</Button>
                </form>
                <footer className={classes.footer}>
                    <Link to="/login" style={{color:'blue'}}>¿Olvidaste tu contraseña?</Link>
                    <span>¿No tienes una cuenta?</span>
                    <Link to="/registro" style={{textDecoration: 'none', width: '100%'}}>
                        <Button style={{fontSize: '1em',margin: 0,color: 'white', background: '#7F7F7F', width: '100%', borderRadius: '.5em'}}>
                        REGISTRATE
                        </Button>
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default FormLogin