import { idBankAccount } from "../BankAccount"
import { idUser } from "../User"
import Empresa from "../Empresa"
import Persona from "../Persona"

export type idProfile = string

interface ProfileData {
  id: idProfile
  type: Empresa | Persona
  isSelected?: boolean
}

interface Profile {
  data: ProfileData | null
  users: idUser[]
  bankAccounts: idBankAccount[]
}

export default Profile
