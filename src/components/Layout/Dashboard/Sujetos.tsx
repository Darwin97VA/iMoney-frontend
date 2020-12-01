import { Modal } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import CardSujeto from './CardSujeto'

interface ModalSujetosProps {
  open: boolean
  actual: string
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
}
const ModalSujetos = ({ open, onClose, actual }: ModalSujetosProps) => {
  const asignadosEn = useSelector((data: RootState) => {
    const yo = data.Personas.find(p=>p._id === data.Sesion.persona)
    return yo?.asignamientos || []
  })
  console.log(asignadosEn)

  return (
    <Modal open={open} onClose={onClose} style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em'}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div >
        {
          asignadosEn.map(asignamiento => 
            <CardSujeto asignamiento={asignamiento} key={asignamiento._id} />)
        }
      </div>
    </Modal>
  )
}

export default ModalSujetos