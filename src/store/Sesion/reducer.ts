import { Asignamiento } from "../../interfaces/Utils"
import {
  SesionState,
  SesionActionTypes,
  ADD_SESION,
  EDIT_ASIGNACION,
} from "./types"

export type ISesionState = SesionState
const initialState: SesionState = {}

function reducer(state = initialState, { type, payload }: SesionActionTypes) {
  switch (type) {
    case ADD_SESION:
      return payload
    case EDIT_ASIGNACION:
      let sesion = { ...state }
      let asignacion = payload as Asignamiento
      if (asignacion.tipo) {
        sesion.asignado = asignacion
      }
      return sesion
    default:
      return state
  }
}

export default reducer
