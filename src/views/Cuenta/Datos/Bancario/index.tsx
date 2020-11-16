import React, { useRef, useState } from 'react'

import Input from '../../../../components/Input'
import Button, { ButtonSecondary } from '../../../../components/Button'

import classes from './style.module.css'
import { Link } from 'react-router-dom'


const ButtonFile = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <label>
            <ButtonSecondary style={{
                fontSize: '.9em',
                width: '80%',
                margin: 'auto'
            }} onClick={(e: { preventDefault: Function })=>{
                e.preventDefault()
                if(inputRef.current) {
                    inputRef.current.click()
                }
            }}>
                ADJUNTA DOCUMENTO DE IDENTIDAD
            </ButtonSecondary>
            <input type="file" name="file" style={{
                overflow: 'hidden',
                height: 0,
                width: 0,
            }} ref={inputRef}/>
        </label>
    )
}

const _handlerChange = (callback: Function) => 
    (e: React.ChangeEvent<HTMLInputElement>) => callback(e.target.value)
    
const Register = ({ addSubmit }: { addSubmit: Function }) => {
    const [banco, setBanco] = useState('')
    const [tipoCuenta, setTipoCuenta] = useState('')

    const [moneda, setMoneda] = useState('')
    const [numeroCuenta, setNumeroCuenta] = useState('')
    const [cci, setCci] = useState('')

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addSubmit()
    }
    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={_handleSubmit}>
                <h1 style={{textAlign: 'center'}}>2) Registro de Cuenta Bancaria</h1>

                <fieldset className={classes.fieldset}>
                    <Input label="Banco" value={banco} onChange={_handlerChange(setBanco)} />
                    <Input label="Tipo de cuenta" value={tipoCuenta} onChange={_handlerChange(setTipoCuenta)} />
                    <Input label="Moneda" value={moneda} onChange={_handlerChange(setMoneda)} />

                    <Input label="Número de cuenta" type="number" value={numeroCuenta} onChange={_handlerChange(setNumeroCuenta)} />
                    <Input label="Número CCI de cuenta" type="number" value={cci} onChange={_handlerChange(setCci)} />

                    <ButtonFile />
                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        Términos y condiciones / Política de Privacidad y Uso de Datos
                    </Link> 
                </div>

                <Button style={{margin: 'auto', width: '300px'}}> Siguiente </Button>

            </form>
        </div>
    )
}

export default Register