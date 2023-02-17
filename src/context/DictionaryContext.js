import React, { useState, createContext, useEffect } from 'react'

export const DictionaryContext = createContext(null)

export const DictionaryProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState(null)

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      searchInput !== ''
        ? fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
          )
            .then(response => response.json())
            .then(data => {
              setData(data[0])
              console.log('log from context =>', data[0])
            })
        : setData(null)
    }, 1000)

    return () => clearTimeout(debounce)
  }, [searchInput])

  return (
    <DictionaryContext.Provider
      value={{
        searchInput,
        setSearchInput,
        data
      }}>
      {children}
    </DictionaryContext.Provider>
  )
}
