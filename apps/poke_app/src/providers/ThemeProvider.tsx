import { FC, ReactNode, useEffect, useState } from 'react'

import { ThemeContext } from 'src/contexts/ThemeContext'
import { handleTheme } from 'src/utils/dark-theme.util'

interface Props {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const handleToggleTheme = () => {
    setIsDark(!isDark)
    handleTheme(isDark ? 'light' : 'dark')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(!theme || theme === 'dark')
    handleTheme(theme)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        handleToggleTheme,
        currentTheme: isDark ? 'dark' : 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
