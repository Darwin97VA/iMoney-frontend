import React from "react"
import GreenLink from "../../../components/GreenLink"


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

export default Final