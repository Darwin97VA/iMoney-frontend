export enum TipoArchivo {
  PDF = "PDF",
  PNG = "PNG",
  JPG = "JPG",
}

export type IdArchivo = string
export interface IArchivo {
  _id: IdArchivo
  tipo: TipoArchivo
}
