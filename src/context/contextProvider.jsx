import React from 'react'

const context = React.createContext();
const contextProvider = ({children}) => {
    
    const contextValue ={

    }
  return (
    <context.Provider value={contextValue}>
        {children}
    </context.Provider>
  )
}

export default contextProvider
export {context}