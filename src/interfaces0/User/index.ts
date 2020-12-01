export enum UserType {
  ADMIN = "administrador",
  GESTOR = "gestor",
  ESTANDAR = "estandar",
  NULL = "null",
}

export type idUser = string

export interface UserData {
  id: idUser
  type: UserType
  email: string
}

interface User {
  data: UserData | null
}

export const getTypeUser = (user: User): UserType | false => {
  if (user.data) {
    switch (user.data.type) {
      case UserType.ADMIN:
        return UserType.ADMIN
      case UserType.GESTOR:
        return UserType.GESTOR
      case UserType.ESTANDAR:
        return UserType.ESTANDAR
      case UserType.NULL:
        return UserType.NULL
      default:
        return false
    }
  }
  return false
}

export default User
