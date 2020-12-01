import { Button } from '@material-ui/core'
import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Sujetos from './Sujetos'

const CambioSujeto = () => {
  const [open, setOpen] = useState(false)
  const sujeto = useSelector((data: RootState)=>{
    const asignado = data.Sesion.asignado
    let nombres: string 
    if(asignado) {
      if(asignado.tipo === "Persona") {
        const sujeto = data.Personas.find(persona => persona._id === asignado._id)
        
        if (sujeto?.identidad) {
          nombres = sujeto?.identidad.nombres
          return { nombres, ...asignado }
        }
      } else {
        const sujeto = data.Empresas.find(empresa => empresa._id === asignado._id)
        if(sujeto) {
          nombres = sujeto.razonSocial
          return { nombres, ...asignado }
        }
      }
    }
    return null
  })
  return sujeto ? (
    <div>
        <Button onClick={() => setOpen(true)}>
          <div style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-end'}}>
            <span> { sujeto.tipo } </span>
            <h3> { sujeto.nombres } </h3>
          </div>
        </Button>
        <Sujetos open={open} onClose={() => setOpen(false)} actual={sujeto?.tipo} />
    </div>
  ) : <h3>Error</h3>
}

export default CambioSujeto