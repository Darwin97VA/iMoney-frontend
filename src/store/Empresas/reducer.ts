import {
  EmpresaState,
  EmpresaActionTypes,
  ADD_EMPRESA,
  INSERTAR_TODAS_EMPRESAS,
} from "./types"

export type IEmpresasState = EmpresaState[]

const initialState: IEmpresasState = []

function reducer(state = initialState, { type, payload }: EmpresaActionTypes) {
  let empresas
  switch (type) {
    case INSERTAR_TODAS_EMPRESAS:
      empresas = [...(payload as IEmpresasState)]
      const empresasNoRetidas: IEmpresasState = []
      empresas.forEach((em) => {
        const añadida = empresasNoRetidas.find((e) => {
          return String(e._id) === String(em._id)
        })
        if (!añadida) {
          empresasNoRetidas.push(em)
        }
      })
      return empresasNoRetidas
    case ADD_EMPRESA:
      return state
    default:
      return state
  }
}

export default reducer
