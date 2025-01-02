import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
import SignInPage from './pages/sign-in-page'
import SignUpPage from './pages/sign-up-page'
import { BrowserRouter, Routes, Route } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/signup" element={<SignUpPage />} />   
      <Route path="/signin" element={<SignInPage />} />   
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
