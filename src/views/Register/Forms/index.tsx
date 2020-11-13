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
        <Route path='/registro/persona'>
            <Persona addSubmit={show} />
        </Route>
        <Route path='/registro/empresa'>
            <Empresa addSubmit={show} />
        </Route>
    </Switch>
)

const Register = () => {
    const [sended, setSended] = useState(false)
    const showFinalMessage = useCallback(() => setSended(true), [])
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Logo />
            </header>
            <main>
                { sended ? <Sended /> : <TypesRegister show={showFinalMessage} /> }
            </main>
        </div>

    )
}

export default Register