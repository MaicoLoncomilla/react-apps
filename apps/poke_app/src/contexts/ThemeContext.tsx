import { createContext } from 'react'

export interface IThemeContext {
  handleToggleTheme: () => void
  currentTheme: 'light' | 'dark'
}

export const ThemeContext = createContext<IThemeContext>({
  handleToggleTheme: () => {
    return
  },
  currentTheme: 'dark',
})
