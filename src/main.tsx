import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/cormorant/wght.css'
import '@fontsource-variable/cormorant/wght-italic.css'
import '@fontsource-variable/jost/wght.css'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
