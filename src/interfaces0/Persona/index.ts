interface DocumentoIdentidad {
  type: "DNI" | "Pasaporte" | "PEP"
  value: number | string
}
interface Persona {
  data: {
    docIdentidad: DocumentoIdentidad
    nombres: string
  }
}
export default Persona
