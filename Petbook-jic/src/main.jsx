import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import CarouselLogin from './Login/LandingPage.jsx';

function DisplayAddress() {
  const address = `http://${window.location.hostname}:${import.meta.env.VITE_PORT || 5173}`;
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayAddress />
    <App />
  </StrictMode>
);

