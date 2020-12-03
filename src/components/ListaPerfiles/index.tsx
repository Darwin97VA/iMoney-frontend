import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../store/store'
import CardSujeto from './CardSujeto'

const ListaPerfiles = ({ onClick=()=>{} }: { onClick?: Function }) => {
  const history = useHistory()
  const asignadosEn = useSelector((data: RootState) => {
    const yo = data.Personas.find(p=>String(p._id) === String(data.Sesion.persona))
    return yo?.asignamientos || []
  })

  return (
    <div style={{
      display: 'grid', 
      placeItems: 'center',
      gridGap: '.5em',
      padding: '.5em',
      background: 'white'
    }}>
      <Button color="primary" variant="contained" 
        style={{margin: '1em'}}
        onClick={() => {
          history.push('/perfiles/crear')
          onClick()
        }}
      >
        Crear nuevo Perfil
      </Button>
      <div style={{ 
        display: 'grid',
        gridGap: '1em',
        gridTemplateColumns: 'repeat(auto-fit) min-max(150px, 1fr)',
        gridTemplateRows: 'repeat(auto-fit) min-max(150px, 1fr)',
      }}>
        {
          asignadosEn.map((asignamiento, i) => 
          <CardSujeto asignamiento={asignamiento} key={i} />)
        }
      </div>
    </div>
  )
}

export default ListaPerfiles