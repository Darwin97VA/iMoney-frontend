import { EDIT_ASIGNACION, ADD_SESION, SesionActionTypes } from "./types"
import { ISesion } from "../../interfaces/Sesion"
import { Asignamiento } from "../../interfaces/Utils"

export function addSesion(user: ISesion): SesionActionTypes {
  return {
    type: ADD_SESION,
    payload: user,
  }
}

export function editAsignacion(asignacion: Asignamiento): SesionActionTypes {
  return {
    type: EDIT_ASIGNACION,
    payload: asignacion,
  }
}
