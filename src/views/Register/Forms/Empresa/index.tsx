import React, { useState } from 'react'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

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
    const [isPep, setIsPep] = useState('')

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
                    <img src="/img/simbolo-empresa.png" width="50px" alt="Empresa"/>
                    <h1 style={{textAlign: 'center', marginLeft: '8px'}}>Empresa</h1>
                </div>
                <strong style={{display: 'block', textAlign: 'center'}}>(En construcción: 2da etapa)</strong>
                <fieldset className={classes.fieldset}>
                    <Input label="Número de RUC" type="number" value={dni} onChange={_handlerChange(setDni)} />
                    <Input label="Razón Social" value={nombres} onChange={_handlerChange(setNombres)} />

                    <Input label="Actividad Económica" value={nacionalidad} onChange={_handlerChange(setNacionalidad)} />
                    <Input label="Teléfono Fijo" value={ocupacion} onChange={_handlerChange(setOcupacion)} />

                    <Input label="Dirección" value={domicilio} onChange={_handlerChange(setDomicilio)} />
                    <Input label="Distrito"
                        value={celular} onChange={_handlerChange(setCelular)} />

                    <Input label="Provincia" value={isPep} onChange={_handlerChange(setIsPep)} />
                    <Input label="Departamento" placeholder="Persona Expuesta Políticamente" 
                        value={pep} onChange={_handlerChange(setPep)} />

                    <Input label="Grupo Económico" value={correo} onChange={_handlerChange(setCorreo)} />
                    <Input label="Empresas vinculadas" placeholder="Separa por comas 'A, B'"
                        value={contraseña} onChange={_handlerChange(setContraseña)} />
                </fieldset>

                <Button type="submit" style={{margin: 'auto', width: '300px'}}> Siguiente </Button>

            </form>
        </div>
    )
}

export default Register