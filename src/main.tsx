import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { NavigationBar } from './components/navigationbar/navigatiionbar.tsx'
import { ProfileCard } from './components/profilecard/profilecard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element= {<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
