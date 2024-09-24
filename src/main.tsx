import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '../src/assets/styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home.tsx';
import { SigninForm } from './components/forms/signinform.tsx';
import { store } from '../src/store.ts';
import { Provider } from 'react-redux';
import { Signup } from './pages/signup/signup.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/login/signin"
            element={<SigninForm />}
          />
          <Route
            path="/home"
            element={<Home />}
          ></Route>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/feed"
            element={<App />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
