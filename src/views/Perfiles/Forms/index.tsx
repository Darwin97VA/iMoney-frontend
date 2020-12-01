import React, { useState, useCallback } from 'react'
import { Route, Switch } from 'react-router-dom'
import Persona from './Persona'
import Empresa from './Empresa'
import Sended from './Sended'
import Logo from '../../../components/Logo'

import classes from './style.module.css'

interface TypesRegisterProps {
    show: () => void
}
const TypesRegister = ({ show }: TypesRegisterProps) => (
    <Switch>
        <Route path='/perfiles/crear/persona'>
            <Persona addSubmit={show} />
        </Route>
        <Route path='/perfiles/crear/empresa'>
            <Empresa addSubmit={show} />
        </Route>
    </Switch>
)

const Register = () => {
    const [sended, setSended] = useState(false)
    const showFinalMessage = useCallback(() => setSended(true), [])
    console.log('sended: ', sended)
    return (
        <div className={classes.container}>
            <main>
                { sended ? <Sended /> : <TypesRegister show={showFinalMessage} /> }
            </main>
        </div>

    )
}

export default Register