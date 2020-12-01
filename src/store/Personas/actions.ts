import {
  PERSONA_ADD,
  INSERTAR_TODAS_PERSONAS,
  INSERTAR_MI_PERSONA,
  PERSONA_EDIT_ASIGNAMIENTOS,
  PERSONA_EDIT_USERS,
  PersonaActionTypes,
  Asignando,
} from "./types"
import { IPersona } from "../../interfaces/Persona"

export function addPersona(user: IPersona): PersonaActionTypes {
  return {
    type: PERSONA_ADD,
    payload: user,
  }
}

export function insertarTodasPersonas(personas: IPersona[]) {
  return {
    type: INSERTAR_TODAS_PERSONAS,
    payload: personas,
  }
}

export function registroInsertarMiPersona(user: IPersona): PersonaActionTypes {
  return {
    type: INSERTAR_MI_PERSONA,
    payload: user,
  }
}

export function editarAsignamientos(payload: Asignando): PersonaActionTypes {
  return {
    type: PERSONA_EDIT_ASIGNAMIENTOS,
    payload,
  }
}

export function editarUsersDePersona(payload: Asignando): PersonaActionTypes {
  return {
    type: PERSONA_EDIT_USERS,
    payload,
  }
}
