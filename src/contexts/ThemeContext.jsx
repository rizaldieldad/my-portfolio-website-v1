import { createContext, useState, useEffect, useContext, Children } from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode')
    return storedTheme ?? 'true'
  })

  useEffect(() => {
    const htmlElement = document.documentElement
    if (darkMode) {
      htmlElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      htmlElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const value = { useThemeContext, darkMode, toggleDarkMode }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
