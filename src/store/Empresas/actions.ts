import {
  ADD_EMPRESA,
  EmpresaActionTypes,
  INSERTAR_TODAS_EMPRESAS,
} from "./types"
import { IEmpresa } from "../../interfaces/Empresa"

export function addMessage(empresa: IEmpresa): EmpresaActionTypes {
  return {
    type: ADD_EMPRESA,
    payload: empresa,
  }
}

export function insertarTodasEmpresas(empresas: IEmpresa[]) {
  return {
    type: INSERTAR_TODAS_EMPRESAS,
    payload: empresas,
  }
}
