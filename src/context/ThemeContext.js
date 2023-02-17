import React, { useState, createContext } from 'react'

export const ThemeContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [fonts, setFonts] = useState('sans-serif')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fonts, setFonts }}>
      <main
        className={`${
          theme === 'light' ? 'lightTheme' : theme === 'dark' && 'darkTheme'
        } ${
          fonts === 'serif'
            ? 'serif'
            : fonts === 'sans-serif'
            ? 'sans-serif'
            : fonts === 'monospace' && 'monospace'
        }`}>
        {children}
      </main>
    </ThemeContext.Provider>
  )
}
