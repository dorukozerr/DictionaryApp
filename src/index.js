import { createRoot } from 'react-dom/client'
import { App } from './App'
import './scss/main.scss'
import { ThemeProvider } from './context/ThemeContext'
import { DictionaryProvider } from './context/DictionaryContext'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <ThemeProvider>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </ThemeProvider>
)
