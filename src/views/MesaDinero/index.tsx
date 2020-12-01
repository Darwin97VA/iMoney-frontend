import React from 'react'
import Calculadora from './Calculadora'

const MesaDinero = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>MesaDinero</h1>
      <br />
      <Calculadora />
    </div>
  )
}

export default MesaDinero