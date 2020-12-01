import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../store/store'
import CardSujeto from './CardSujeto'

const ModalSujetos = () => {
  const history = useHistory()
  const asignadosEn = useSelector((data: RootState) => {
    const yo = data.Personas.find(p=>p._id === data.Sesion.persona)
    return yo?.asignamientos || []
  })
  console.log(asignadosEn)

  return (
    <div >
      <Button color="primary" variant="contained" onClick={() => history.push('/perfiles/crear')}>
        Crear nuevo Perfil
      </Button>
      {
        asignadosEn.map(asignamiento => 
          <CardSujeto asignamiento={asignamiento} key={asignamiento._id} />)
      }
    </div>
  )
}

export default ModalSujetos