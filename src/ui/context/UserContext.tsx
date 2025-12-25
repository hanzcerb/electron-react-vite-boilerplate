import { createContext, useContext, useState, type ReactNode } from 'react'

interface UserContextType {
  username: string
  setUsername: (name: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState('Guest User')

  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
