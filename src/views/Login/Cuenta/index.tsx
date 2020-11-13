import React, { useState } from 'react'
import Button from '../../../components/Button'
import Card from './Card'
import classes from './style.module.css'

const Bancario = () => {
    return (
        <div>
            <h1>Banco</h1>
        </div>
    )
}

const Cuenta = () => {
    const [viewBank, setViewBank] = useState<Boolean>(false)
    return (
        <div className={classes.container}>
            {
                viewBank
                    ? <Bancario />
                    : <form>
                        <h1>Panel de Control</h1>
                        <h3>¡Bienvenido a iMoney Perú!</h3>
                        <Card title="1 Completa tu perfil" img="/img/paperCheck.png">
                            <span>Ingresa tu información y tus documentos para verificar tu identidad.</span>
                            <Button onClick={()=>setViewBank(true)}>Completar perfil</Button>
                        </Card>
                    </form>
            }
            

        </div>
    )
}

export default Cuenta