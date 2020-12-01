enum CreditStatus {
  DISPLAYED = "DISPLAYED",
  REQUESTED = "REQUESTED",
  DENIED = "DENIED",
  PAYMENTS_OK = "PAGOS_AL_DIA",
  DEBT_TERMINATED = "DEUDA_TERMINADA",
  LATE_PAYMENT = "PAGO_ATRASADO",
}
enum CreditTypes {
  PRESTAMO_EFECTIVO = "PRESTAMO_EFECTIVO",
}

interface Acquisition {
  date: Date
  amount: number
}

interface Credit {
  type: CreditTypes
  status: CreditStatus
  acquisition: Acquisition | null
  fees: {
    feePrice: number
    feesPaid: number
    totalFees: number
  }
  tcea: number // in percentage
}

export default Credit
