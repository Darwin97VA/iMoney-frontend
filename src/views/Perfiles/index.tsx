import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListaPerfiles from '../../components/ListaPerfiles'
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
        <Switch>
            <Route exact path="/perfiles/crear">
                <h1 className={classes.title}>
                    ¿Qué tipo de usuario quieres registrar?
                </h1>
                <div className={classes.cards}>
                    <Card to="/perfiles/crear/persona" img="/img/personas.png" title="Persona" />
                    <Card to="/perfiles/crear/empresa" img="/img/empresa.png" title="Empresa" />
                </div>
            </Route>
            <Route component={Forms} />
        </Switch>
    )
}

const Perfiles = () => {
    return (
        <div className={classes.container}>
            <Switch>
                <Route exact path="/perfiles">
                    <ListaPerfiles />
                </Route>
                <Route path="/perfiles/crear">
                    <Register />
                </Route>
            </Switch>
        </div>
    )
}

export default Perfiles