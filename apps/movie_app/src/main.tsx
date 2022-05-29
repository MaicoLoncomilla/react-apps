import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'src/App'
import { ThemeProvider } from 'src/providers/ThemeProvider'

const element = document.getElementById('root')

const root = createRoot(element as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
