import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import Empresas, { IEmpresasState } from "./Empresas/reducer"
import Personas, { IPersonasState } from "./Personas/reducer"
import Sesion, { ISesionState } from "./Sesion/reducer"

// import defaultState from "./defaultState"

export interface RootState {
  Personas: IPersonasState
  Sesion: ISesionState
  Empresas: IEmpresasState
}

const reducer = combineReducers({
  Personas,
  Sesion,
  Empresas,
})

const store = createStore(
  reducer,
  // defaultState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
