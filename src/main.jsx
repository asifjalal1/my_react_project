import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import CssPage from './CssPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CssPage />
  </StrictMode>,
)
