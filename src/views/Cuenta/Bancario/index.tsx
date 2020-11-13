import React, { useState } from 'react'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

import classes from './style.module.css'
import GreenLink from '../../../components/GreenLink'


const Final = () => {
    return (
        <div style={{
            display: 'grid',
            gridGap: '1em',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '350px',
            placeItems: 'center'
        }}>
            <h1 style={{fontWeight: 100}}>Tu usuario ha sido registrado y confirmado</h1>
            <h2>¡Felicidades por unirte a iMoney!</h2>
            <img src="/img/Check.png" alt="Felicidades!"/>
            <GreenLink to="/">(Ir a Inicio)</GreenLink>
        </div>
    )
}

const _handlerChange = (callback: Function) => 
    (e: React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)
    
const Register = () => {
    const [showFinal, setShowFinal] = useState(false)
    const [dni, setDni] = useState('')
    const [nombres, setNombres] = useState('')

    const [nacionalidad, setNacionalidad] = useState('')
    const [ocupacion, setOcupacion] = useState('')

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className={classes.container}>
            {
                showFinal
                ? <Final />
            : <form action="" className={classes.form} onSubmit={_handleSubmit}>
                <h1 style={{textAlign: 'center'}}>Registro de Cuenta Bancaria</h1>

                <fieldset className={classes.fieldset}>
                    <Input label="Banco" value={nombres} onChange={_handlerChange(setNombres)} />
                    <Input label="Número de cuenta" type="number" value={dni} onChange={_handlerChange(setDni)} />

                    <Input label="Tipo de cuenta" value={nacionalidad} onChange={_handlerChange(setNacionalidad)} />
                    <Input label="Moneda" value={ocupacion} onChange={_handlerChange(setOcupacion)} />
                    <Input label="Número CCI de cuenta" type="number" value={dni} onChange={_handlerChange(setDni)} />

                </fieldset>

                <Button onClick={() => setShowFinal(true)} style={{margin: 'auto', width: '300px'}}> Siguiente </Button>

            </form>
        
            }
        </div>
    )
}

export default Register