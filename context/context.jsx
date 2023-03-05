import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleLinks = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
