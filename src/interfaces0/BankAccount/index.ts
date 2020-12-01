enum Banks {
  BCP = "BCP",
  INTERBANK = "Interbank",
}

enum TypesBankAccount {
  AHORRO = "AHORRO",
  CORRIENTE = "CORRIENTE",
}

enum Currencies {
  SOLES = "SOLES",
  DOLARES = "DÓLARES",
}

export type idBankAccount = string

interface BankAccountData {
  id: idBankAccount
  cci: number
  account: number
  bank: Banks
  type: TypesBankAccount
  currency: Currencies
}

interface BankAccount {
  data: BankAccountData | null
}

export default BankAccount
