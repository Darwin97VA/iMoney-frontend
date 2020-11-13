import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Forms from './Forms'

import classes from './style.module.css'

interface CardProps {
    to: string,
    img: string,
    title: string
}
const Card = ({ to, img, title }: CardProps) => {
    const [isOver, setOver] = useState(false)
    const _handleOver = () => setOver(true)
    const _handleOut = () => setOver(false)

    return (
    <Link to={to} onMouseOver={_handleOver} onMouseLeave={_handleOut}
        style={{
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            textDecoration: isOver ? 'underline' : 'none'
        }}>
        <img src={img} width="160" height="160"
            alt={`Botón ir al registro de ${title}`} />
        <span> { title } </span>
    </Link>
    )
}

const Register = () => {
    return (
        <div className={classes.container}>
            <Switch>
                <Route exact path="/registro">
                    <h1 className={classes.title}>
                        ¿Qué tipo de usuario quieres registrar?
                    </h1>
                    <div className={classes.cards}>
                        <Card to="/registro/persona" img="/img/personas.png" title="Persona" />
                        <Card to="/registro/empresa" img="/img/empresa.png" title="Empresa" />
                    </div>
                </Route>
                <Route component={Forms} />
            </Switch>
        </div>
    )
}

export default Register