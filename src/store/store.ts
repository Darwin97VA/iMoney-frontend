import { createStore, combineReducers, applyMiddleware } from "redux"
import { save, load } from "redux-localstorage-simple"
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

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(thunk, save())
)(createStore)

const store = createStoreWithMiddleware(
  reducer,
  // defaultState,
  load()
)

export default store
