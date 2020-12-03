import { Modal } from '@material-ui/core'
import React from 'react'
import ListaPerfiles from '../ListaPerfiles'

interface ModalSujetosProps {
  open: boolean
  actual: string
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
}
const ModalSujetos = ({ open, onClose }: ModalSujetosProps) => {

  return (
    <Modal open={open} onClose={onClose} style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em'}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div>
        <ListaPerfiles onClick={onClose} />
      </div>
    </Modal>
  )
}

export default ModalSujetos