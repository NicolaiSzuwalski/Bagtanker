import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './providers/SupabaseProvider.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SupabaseProvider>
  </StrictMode>,
)
