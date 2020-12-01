import { ISesion } from "../../interfaces/Sesion"
import { Asignamiento } from "../../interfaces/Utils"

export const ADD_SESION = "ADD_SESION"
export const EDIT_ASIGNACION = "EDIT_ASIGNACION"

export interface SesionState extends ISesion {}

interface AddSesionAction {
  type: typeof ADD_SESION
  payload: ISesion
}

interface EditAsignacionAction {
  type: typeof EDIT_ASIGNACION
  payload: Asignamiento
}

export type SesionActionTypes = AddSesionAction | EditAsignacionAction
