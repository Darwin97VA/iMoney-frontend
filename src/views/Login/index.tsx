import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Button from '../../components/Button'
import Input from  '../../components/Input/index'
import { Isotipo } from  '../../components/Logo'
import { insertarTodasEmpresas } from '../../store/Empresas/actions'
import { insertarTodasPersonas } from '../../store/Personas/actions'
import { addSesion } from '../../store/Sesion/actions'
import { RootState } from '../../store/store'
import classes from './style.module.css'

const { REACT_APP_URLHOST, NODE_ENV } = process.env
const API_DEV = `${REACT_APP_URLHOST}/api/persona/entrar`
const API_PROD = (()=>{
    const parts = window.location.origin.split(':')
    parts.pop()
    return parts.join(':') + '/api/persona/entrar'
})();
const API = (NODE_ENV === 'production' ? API_PROD : API_DEV)

const FormLogin = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [sending, setSending] = useState(false)

    const dispatch = useDispatch()
    const isAuth = useSelector((state: RootState) => state.Sesion.token)

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        const body = JSON.stringify({
            correo: user,
            contraseña: pass
        })
        fetch(API, {
            method: 'POST',
            body,
            headers: {
            'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(res=>res.json())
        .then(res => {
            const { token, _id, /* persona, */ Personas, Empresas } = res.data
            setSending(false)
            dispatch(insertarTodasPersonas(Personas))
            dispatch(insertarTodasEmpresas(Empresas))
            // dispatch(registroInsertarMiPersona(persona))
            dispatch(addSesion({
                token,
                persona: _id,
                asignado: {
                    _id,
                    tipo: 'Persona'
                }
            }))
        }).catch(error=>{
            console.error(error)
            alert('Credencials inválidas')
        })
    }
    return isAuth ? <Redirect to="/" /> : (
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
                        <Button disabled={sending}
                        style={{fontSize: '1em',margin: 0,color: 'white', background: '#7F7F7F', width: '100%', borderRadius: '.5em'}}>
                        REGISTRATE
                        </Button>
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default FormLogin