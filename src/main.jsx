import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const unregisterServiceWorker = async () => {
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    registrations.forEach(registration => {
      registration.unregister();
    });
    console.log('Service workers unregistered successfully.');
  } catch (error) {
    console.error('Error unregistering service workers:', error);
  }
};

// Unregister service workers on page load
unregisterServiceWorker();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
