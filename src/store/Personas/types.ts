import { IdPersona, IPersona } from "../../interfaces/Persona"
import { Asignamiento } from "../../interfaces/Utils"

export const INSERTAR_TODAS_PERSONAS = "INSERTAR_TODAS_PERSONAS"
export const INSERTAR_MI_PERSONA = "INSERTAR_MI_PERSONA"
export const PERSONA_ADD = "PERSONA_ADD"
export const PERSONA_EDIT_ASIGNAMIENTOS = "PERSONA_EDIT_ASIGNAMIENTOS"
export const PERSONA_EDIT_USERS = "PERSONA_EDIT_USERS"

export interface PersonaState extends IPersona {}

export interface InsertTodasPersonas {
  type: typeof INSERTAR_TODAS_PERSONAS
  payload: IPersona[]
}

export interface InsertMyPersonaAction {
  type: typeof INSERTAR_MI_PERSONA
  payload: IPersona
}

export interface AddPersonaAction {
  type: typeof PERSONA_ADD
  payload: IPersona
}

export interface Asignando {
  quien: IdPersona
  en: Asignamiento
}

export interface EditAsignamientosAction {
  type: typeof PERSONA_EDIT_ASIGNAMIENTOS
  payload: Asignando
}

export interface EditUsersAction {
  type: typeof PERSONA_EDIT_USERS
  payload: Asignando
}

export type PersonaActionTypes =
  | AddPersonaAction
  | EditAsignamientosAction
  | EditUsersAction
  | InsertMyPersonaAction
  | InsertTodasPersonas
