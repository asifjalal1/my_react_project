import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Scrapping from './Scrapping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Scrapping /> 
    {/* <App /> */}

  </StrictMode>,
)
