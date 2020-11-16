import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import InputOriginal from '../../../../components/Input'
import Button from '../../../../components/Button'

import classes from './style.module.css'

const Input = (props: any) => <div style={{width: '300px', margin: 'auto'}}>
    <InputOriginal {...props} />
</div>

interface RegisterProps {
    addSubmit: () => void
}

const _handlerChange = (callback: Function) => 
    (e: React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)

const Register = ({ addSubmit }: RegisterProps) => {
    const [correo, setCorreo] = useState('')
    const [celular, setCelular] = useState('')
    const [dni, setDni] = useState('')
    const [contraseña, setContraseña] = useState('')

    // const [pep, setPep] = useState('')
    // const [isPep, setIsPep] = useState(false)

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
                <Input label="Correo" type="email" value={correo} onChange={_handlerChange(setCorreo)} />
                <Input label="Celular" type="number" placeholder="51 999 888 777"
                        value={celular} onChange={_handlerChange(setCelular)} />
                <Input label="DNI" type="number" value={dni} onChange={_handlerChange(setDni)} />
                <Input label="Contraseña" type="password" placeholder="min 8 dígitos de letras/números"
                        value={contraseña} onChange={_handlerChange(setContraseña)} />

                    {/* <Radio value={isPep} onChange={setIsPep} label="Persona Expuesta Políticamente"/>
                    <Input label={
                            isPep
                            ? 'Cargo y Empresa Pública'
                            : 'Se habilita si es PEP'
                        } disabled={!isPep} value={pep} 
                        onChange={_handlerChange(setPep)} required={isPep} /> */}

                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        Términos y condiciones / Política de Privacidad y Uso de Datos
                    </Link> 
                </div>
                
                <Button type="submit" style={{margin: 'auto', width: '300px'}}> CREAR CUENTA </Button>

            </form>
        </div>
    )
}

export default Register