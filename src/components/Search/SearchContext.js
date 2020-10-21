//Handles Search results as a context for global use
//Based on  https://www.youtube.com/watch?v=5LrDIWkK_Bc

import React, { useContext, createContext, useState } from 'react'

const SearchContext = createContext()
const SearchUpdateContext = createContext()

export function useSearch() {
  return useContext(SearchContext)
}

export function useSearchUpdate() {
  return useContext(SearchUpdateContext)
}

export function SearchProvider ({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleSearch() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <SearchContext.Provider value={darkTheme}>
      <SearchUpdateContext.Provider value ={toggleSearch}>
        {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  )
}