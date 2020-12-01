import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input/index'
import Button from '../../components/Button'
import Sended from './Sended'

import classes from './style.module.css'
import { faAddressCard, faEnvelope, faKey, faPhone } from '@fortawesome/free-solid-svg-icons'

const { REACT_APP_URLHOST } = process.env
const API = REACT_APP_URLHOST + 'api/persona/registro'

const Register = () => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [dni, setDni] = useState('')
    const [correo, setCorreo] = useState('')
    const [celular, setCelular] = useState('')
    const [contraseña, setContraseña] = useState('')

    const [sended, setSended] = useState(false)

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const partes = apellidos.split(' ')
        const primerApellido = partes[0] || ''
        const segundoApellido = partes[1] || ''

        const data = {
            "identidad": {
              "tipoDocumentoIdentidad": "Dni",
              "documentoIdentidad": dni,
              "foto": "esto_es_un_id_de_archivo",
              "nacionalidad": "",
              nombres,
              primerApellido,
              segundoApellido
            },
            "pep": [],
            "correo": correo,
            "contraseña": contraseña
        }
        fetch(API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setSended(true)
        })
        .catch(console.error)
    }
    return (
        <div className={classes.container}>
            { sended ? <Sended /> : 
            
            <form action="" className={classes.form} onSubmit={_handleSubmit}>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="/img/simbolo-persona.png" width="50px" alt="Empresa"/>
                    <h1 style={{textAlign: 'center', marginLeft: '8px'}}>Registro</h1>
                </div>

                <fieldset className={classes.fieldset}>
                    <Input label="Nombres" value={nombres} setValue={setNombres} icon={faAddressCard} />
                    <Input label="Apellidos" value={apellidos} setValue={setApellidos} icon={faAddressCard} />
                    <Input label="DNI" type="number" value={dni} setValue={setDni} icon={faAddressCard} />
                    <Input label="Correo" type="email" value={correo} setValue={setCorreo} icon={faEnvelope} />
                    <Input label="Celular" type="number" placeholder="51 999 888 777" value={celular} setValue={setCelular} icon={faPhone} />
                    <Input label="Contraseña" type="password" placeholder="min 8 dígitos de letras/números" value={contraseña} setValue={setContraseña} icon={faKey} />
                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        términos y condiciones, política de privacidad y uso de datos
                    </Link> 
                </div>
                <Button type="submit" style={{margin: 'auto', width: '300px'}}> CREAR CUENTA </Button>

            </form>
            } 
        
        </div>
    )
}

export default Register