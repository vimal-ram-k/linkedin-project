import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigationbar/navigatiionbar.tsx';
import { Home } from './pages/home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        ></Route>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/feed"
          element={<App />}
        />
      </Routes>
    </Router>
  </StrictMode>
);
