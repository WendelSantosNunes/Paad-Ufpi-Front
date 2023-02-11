import { createContext } from "react"

const UserContext = createContext()

export function UserStorage({children}) {
    return (
        <UserContext.Provider value={{usuário:'André'}}>
            {children}
        </UserContext.Provider>
    )
}