import { IdEmpresa } from "./Empresa"
import { Identidad, IdPersona } from "./Persona"

export interface Usuarios {
  propietario: IdPersona[]
  administrador: IdPersona[]
  estandar: IdPersona[]
  visitante: IdPersona[]
}

export interface UsuariosDetalle {
  propietario: Identidad[]
  administrador: Identidad[]
  estandar: Identidad[]
  visitante: Identidad[]
}

export enum TipoCuenta {
  Ahorro = "Ahorro",
  Corriente = "Corriente",
}

export enum TipoMoneda {
  Sol = "Sol",
  Dolar = "Dolar",
}

export enum Banco {
  Bcp = "BCP",
  Interbank = "Interbank",
  Continental = "BBVA",
}

export enum Nacionalidad {
  Peru = "Peru",
  Colombia = "Colombia",
}

export enum TipoDocumentoIdentidad {
  Dni = "Dni",
  CarnetExtrajeria = "Carnet de Extranjeria",
}

export interface AsignamientoEmpresa {
  _id: IdEmpresa
  tipo: "Empresa"
}

export interface AsignamientoPersona {
  _id: IdPersona
  tipo: "Persona"
}
export type Asignamiento = AsignamientoEmpresa | AsignamientoPersona

export enum NivelAsignacion {
  propietario = "propietario",
  administrador = "administrador",
  estandar = "estandar",
  visitante = "visitante",
}
