import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface IHomeContext {
  id: string
  setId: Dispatch<SetStateAction<string>>
}

export const HomeContext = createContext<IHomeContext>({
  id: '',
  setId: () => null
})

export const HomeProvider: React.FC = ({ children }) => {
  const [id, setId] = useState('')
  return <HomeContext.Provider value={{ id, setId }}>{children}</HomeContext.Provider>
}
