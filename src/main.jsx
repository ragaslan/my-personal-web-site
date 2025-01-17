
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthContextProvider from './contexts/AuthContextProvider.jsx'
import GeneralSettingsContextProvider from './contexts/GeneralSettingsContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <AuthContextProvider>
        <GeneralSettingsContextProvider>
        <App />
        </GeneralSettingsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
)
