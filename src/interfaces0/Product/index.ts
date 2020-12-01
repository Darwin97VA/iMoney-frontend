// MONTO DE DESEMBOLSO
// TCEA
// FECHA PROXIMO PAGO

enum ProductTypes {
  CAMBIO = "CAMBIO",
  CREDITO = "CREDITO",
  INVERSION = "INVERSION",
}

interface Product {
  type: ProductTypes
}

export default Product
