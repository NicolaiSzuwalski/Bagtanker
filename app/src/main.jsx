import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './providers/SupabaseProvider.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProvider>
    </SupabaseProvider>
  </StrictMode>,
)
