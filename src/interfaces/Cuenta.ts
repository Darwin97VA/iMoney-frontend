import { Banco, TipoCuenta, TipoMoneda } from "./Utils"

export type IdCuenta = string
export interface ICuenta {
  _id: IdCuenta
  numero: number
  cci: number
  banco: Banco
  tipo: TipoCuenta
  moneda: TipoMoneda
}
