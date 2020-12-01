import { IEmpresa } from "../../interfaces/Empresa"

export const ADD_EMPRESA = "ADD_EMPRESA"
export const INSERTAR_TODAS_EMPRESAS = "INSERTAR_TODAS_EMPRESAS"

export interface EmpresaState extends IEmpresa {}

interface AddEmpresa {
  type: typeof ADD_EMPRESA
  payload: IEmpresa
}

export interface InsertTodasEmpresas {
  type: typeof INSERTAR_TODAS_EMPRESAS
  payload: IEmpresa[]
}

export type EmpresaActionTypes = AddEmpresa | InsertTodasEmpresas
