type PropsTheme = string | null

export const handleTheme = (theme: PropsTheme) => {
  if (!theme || theme === 'dark') {
    document.documentElement.classList.add('dark')
    return localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('class')
    return localStorage.setItem('theme', 'light')
  }
}
