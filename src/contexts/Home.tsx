import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface IHomeContext {
  id: string
  setId: Dispatch<SetStateAction<string>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const HomeContext = createContext<IHomeContext>({
  id: '',
  setId: () => null,
  isLoading: false,
  setIsLoading: () => false
})

export const HomeProvider: React.FC = ({ children }) => {
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  return (
    <HomeContext.Provider value={{ id, setId, isLoading, setIsLoading }}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = (): IHomeContext => useContext(HomeContext)
