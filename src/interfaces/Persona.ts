import { IdArchivo } from "./Archivo"
import { IdCuenta } from "./Cuenta"
import { IdEmpresa } from "./Empresa"
import {
  Asignamiento,
  Nacionalidad,
  TipoDocumentoIdentidad,
  Usuarios,
} from "./Utils"

export interface Identidad {
  tipoDocumentoIdentidad: TipoDocumentoIdentidad
  documentoIdentidad: string
  foto: IdArchivo
  nacionalidad: Nacionalidad

  nombres: string
  primerApellido: string
  segundoApellido: string
}

export type IdPersona = string
export interface IPersona {
  _id: IdPersona
  identidad: Identidad

  verificado?: boolean // Verificado por iMoney
  pep?: Pep[]
  correo: string
  contraseña: string

  usuarios?: Usuarios
  // "Persona.usuarios" y "Empresa.usuarios"
  // mandan sobre "Persona.asignamientos"
  // por eso se obtiene el "Tipo de Relación"
  // desde la Empresa.usuarios o Persona.usuarios
  // cuya "Empresa" o "Persona" se obteniene con el "_id"
  asignamientos: Asignamiento[]

  // Se calculará los nuevos cambios comparando en
  // el cliente la diferencia entre el último y
  // penúltimo item de "cambiosAsignados".
  // Se añaderá un item a "cambiosAsignados" cada
  // vez que se haga login.
  cambiosAsignamientos: {
    momento: Date
    asignamientos: Asignamiento[]
  }[]

  cuentas?: IdCuenta
}

interface Pep {
  cargo: string
  organizacion: string
}
