import React, { useState } from 'react'

import Button from '../../components/Button'
import Card from './Card'

import Personales from './Datos/Personales'
import Bancario from './Datos/Bancario'

import classes from './style.module.css'
import Final from './Final'

const CuentaMain = () => {
    const [step, setStep] = useState(0)

    const goNext = () => setStep(step+1)

    switch(step) {
        case 0:
            return <form>
                <h1>Panel de Control</h1>
                <h3>¡Bienvenido a iMoney Perú!</h3>
                <Card title="Completa tu perfil" img="/img/paperCheck.png">
                    <span>Ingresa tu información y tus documentos para verificar tu identidad.</span>
                    <Button onClick={()=>goNext()}>Perfil de Completar</Button>
                </Card>
            </form>
        case 1:
            return <Personales addSubmit={goNext}/>
        case 2:
            return <Bancario addSubmit={goNext} />
        case 3: 
            return <Final />
        default:
            return null
    }
}

const Cuenta = () => <div className={classes.container}> <CuentaMain /> </div>

export default Cuenta