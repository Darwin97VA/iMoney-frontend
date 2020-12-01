import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../../../components/Input/index'
import Button from '../../../../components/Button'


import classes from './style.module.css'
import { faAddressCard, faEnvelope, faKey, faPhone } from '@fortawesome/free-solid-svg-icons'

interface RegisterProps {
    addSubmit: () => void
}

const Register = ({ addSubmit }: RegisterProps) => {
    const [correo, setCorreo] = useState('')
    const [celular, setCelular] = useState('')
    const [dni, setDni] = useState('')
    const [contraseña, setContraseña] = useState('')

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addSubmit()
    }
    return (
        <div className={classes.container}>
            
            <form action="" className={classes.form} onSubmit={_handleSubmit}>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="/img/simbolo-persona.png" width="50px" alt="Empresa"/>
                    <h1 style={{textAlign: 'center', marginLeft: '8px'}}>Persona Natural</h1>
                </div>

                <fieldset className={classes.fieldset}>
                    <Input label="Correo" type="email" value={correo} setValue={setCorreo} icon={faEnvelope} />
                    <Input label="Celular" type="number" placeholder="51 999 888 777" value={celular} setValue={setCelular} icon={faPhone} />
                    <Input label="DNI" type="number" value={dni} setValue={setDni} icon={faAddressCard} />
                    <Input label="Contraseña" type="password" placeholder="min 8 dígitos de letras/números" value={contraseña} setValue={setContraseña} icon={faKey} />
                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        términos y condiciones, política de privacidad y uso de datos
                    </Link> 
                </div>
                <Button type="submit" style={{margin: 'auto', width: '300px'}}> CREAR CUENTA </Button>

            </form>
        </div>
    )
}

export default Register