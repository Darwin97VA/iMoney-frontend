import { Asignamiento } from "./Utils"
import { IdPersona } from "./Persona"

export interface ISesion {
  token?: string
  persona?: IdPersona
  asignado?: Asignamiento
}
