import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Radio from '../../../../components/Radio'

import classes from './style.module.css'

interface RegisterProps {
    addSubmit: () => void
}

const _handlerChange = (callback: Function) => 
    (e: React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)

const Register = ({ addSubmit }: RegisterProps) => {
    const [dni, setDni] = useState('')
    const [nombres, setNombres] = useState('')

    const [nacionalidad, setNacionalidad] = useState('')
    const [ocupacion, setOcupacion] = useState('')

    const [domicilio, setDomicilio] = useState('')
    const [celular, setCelular] = useState('')

    const [pep, setPep] = useState('')
    const [isPep, setIsPep] = useState(false)

    const [correo, setCorreo] = useState('')
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
                    <Input label="DNI" type="number" value={dni} onChange={_handlerChange(setDni)} />
                    <Input label="Nombres y Apellidos" value={nombres} onChange={_handlerChange(setNombres)} />

                    <Input label="Nacionalidad" value={nacionalidad} onChange={_handlerChange(setNacionalidad)} />
                    <Input label="Ocupación" value={ocupacion} onChange={_handlerChange(setOcupacion)} />

                    <Input label="Domicilio" value={domicilio} onChange={_handlerChange(setDomicilio)} />
                    <Input label="Celular" type="number" placeholder="51 999 888 777"
                        value={celular} onChange={_handlerChange(setCelular)} />

                    <Radio value={isPep} onChange={setIsPep} label="Persona Expuesta Políticamente"/>
                    <Input label={
                            isPep
                            ? 'Cargo y Empresa Pública'
                            : 'Se habilita si es PEP'
                        } disabled={!isPep} value={pep} 
                        onChange={_handlerChange(setPep)} required={isPep} />

                    <Input label="Correo" type="email" value={correo} onChange={_handlerChange(setCorreo)} />
                    <Input label="Contraseña" type="password" placeholder="min 8 dígitos de letras/números"
                        value={contraseña} onChange={_handlerChange(setContraseña)} />
                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        Términos y condiciones / Política de Privacidad y Uso de Datos
                    </Link> 
                </div>
                
                <Button type="submit" style={{margin: 'auto', width: '300px'}}> Registrarse </Button>

            </form>
        </div>
    )
}

export default Register