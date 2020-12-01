enum Currencies {
  DOLAR = "DOLAR",
  SOL = "SOL",
}

interface Acquisition {
  date: Date
  amount: number
}

enum ChangeStatus {
  DISPLAYED = "DISPLAYED",
  REQUESTED = "REQUESTED",
  DENIED = "DENIED",

  ACQUISITION = "ACQUISITION",
}

interface Change {
  from: Currencies // Lo que el usuario entrega
  to: Currencies // Lo que el usuario recibe
  fixedRate: number
  status: ChangeStatus
  acquisition: Acquisition | null
}

export default Change
