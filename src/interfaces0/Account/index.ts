import User from "../User"

interface AccountData {
  token?: string
  user: User
}

interface Account {
  data: AccountData | null
}

export default Account
