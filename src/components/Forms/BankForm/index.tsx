import React, { useState } from 'react'

import Input from '../../Input/index'
import Select from '../../Select/index'
import Button, { ButtonFile } from '../../Button'

import classes from './style.module.css'
import { Link } from 'react-router-dom'
import { faCreditCard, faUniversity } from '@fortawesome/free-solid-svg-icons'
    
const Register = ({ addSubmit }: { addSubmit: Function }) => {
    const [banco, setBanco] = useState('')
    const [tipoCuenta, setTipoCuenta] = useState({name: ''})

    const [moneda, setMoneda] = useState({name: ''})
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
                    <Input label="Banco" value={banco} setValue={setBanco} icon={faUniversity} />
                    <Select label="Tipo de cuenta" value={tipoCuenta} setValue={setTipoCuenta} options={[{ name: 'Cuenta de Ahorro' }, { name: 'Cuenta Corriente' }]} />
                    <Select label="Moneda" value={moneda} setValue={setMoneda} options={[{ name: 'Soles' }, { name: 'Dólares' }]} />

                    <Input label="Número de cuenta" type="number" value={numeroCuenta} setValue={setNumeroCuenta} icon={faCreditCard} />
                    <Input label="Número CCI de cuenta" type="number" value={cci} setValue={setCci} icon={faCreditCard} />

                    <ButtonFile>ADJUNTA DOCUMENTO DE IDENTIDAD</ButtonFile>
                </fieldset>

                <div className={classes.terms}>
                    Registrándote aceptas nuestos <Link to='/terms'>
                        términos y condiciones, política de privacidad y uso de datos
                    </Link> 
                </div>

                <Button style={{margin: 'auto', width: '300px'}}> Siguiente </Button>

            </form>
        </div>
    )
}

export default Register