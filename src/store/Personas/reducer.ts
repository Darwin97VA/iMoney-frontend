import {
  INSERTAR_MI_PERSONA,
  INSERTAR_TODAS_PERSONAS,
  PERSONA_ADD,
  PERSONA_EDIT_ASIGNAMIENTOS,
  PERSONA_EDIT_USERS,
  PersonaState,
  PersonaActionTypes,
  Asignando,
} from "./types"

export type IPersonasState = PersonaState[]

const initialState: IPersonasState = []

function reducer(state = initialState, { type, payload }: PersonaActionTypes) {
  let asignando: Asignando, personas
  switch (type) {
    case INSERTAR_TODAS_PERSONAS:
      return payload
    case INSERTAR_MI_PERSONA:
      return [payload]
    case PERSONA_ADD:
      let persona = payload as PersonaState

      if (persona.identidad) {
        const exist = state.find((_persona) => _persona._id === persona._id)

        if (!exist) {
          return state.concat(persona)
        }
      }

      return state

    case PERSONA_EDIT_ASIGNAMIENTOS:
      asignando = payload as Asignando
      personas = [...state]

      if (asignando.quien) {
        const _index = personas.findIndex(
          (_person) => _person._id === asignando.quien
        )
        const _sujeto = personas[_index]

        if (_sujeto) {
          const sujeto = { ..._sujeto }
          const nuevosAsignamientos = sujeto.asignamientos.filter(
            (asig) => asig._id !== asignando.en._id
          )
          nuevosAsignamientos.push(asignando.en)

          sujeto.asignamientos = nuevosAsignamientos

          personas[_index] = sujeto

          return personas
        }
      }
      return state

    case PERSONA_EDIT_USERS:
      personas = [...state]
      asignando = payload as Asignando
      // const { quien, en } = asignando

      // const personaObjetivo = personas.findI

      // persona.users = {

      // }

      return [payload]

    default:
      return state
  }
}

export default reducer
