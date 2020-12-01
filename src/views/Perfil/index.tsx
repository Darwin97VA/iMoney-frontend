import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Perfil = () => {
  const perfil = useSelector((data: RootState) => {
    const { asignado } = data.Sesion
    if(asignado) {
      if(asignado.tipo === 'Empresa') {
        return data.Empresas.find(e => e._id === asignado._id)
      } else {
        return data.Personas.find(p => p._id === asignado?._id)
      }
    }
    return null
  })
  console.log(perfil)
  return (
    <div>
      <div>Perfil</div>
      { perfil ? JSON.stringify(perfil, null, 3) : null }
    </div>
  )
}

export default Perfil