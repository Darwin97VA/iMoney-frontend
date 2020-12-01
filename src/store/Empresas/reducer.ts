import {
  EmpresaState,
  EmpresaActionTypes,
  ADD_EMPRESA,
  INSERTAR_TODAS_EMPRESAS,
} from "./types"

export type IEmpresasState = EmpresaState[]

const initialState: IEmpresasState = []

function reducer(state = initialState, { type, payload }: EmpresaActionTypes) {
  switch (type) {
    case INSERTAR_TODAS_EMPRESAS:
      return payload
    case ADD_EMPRESA:
      return state
    default:
      return state
  }
}

export default reducer
