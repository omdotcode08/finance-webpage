import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.addEventListener('error', (e) => {
  document.body.innerHTML += `<div style="color:red; z-index:9999; position:fixed; top:0; left:0; background:white; padding: 20px;"><h1>ERROR:</h1><pre>${e.error?.stack || e.message}</pre></div>`;
});

window.addEventListener('unhandledrejection', (e) => {
  document.body.innerHTML += `<div style="color:red; z-index:9999; position:fixed; top:0; left:0; background:white; padding: 20px;"><h1>PROMISE REJECTION:</h1><pre>${e.reason?.stack || e.reason}</pre></div>`;
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML += `<div style="color:red;"><h1>Root element not found!</h1></div>`;
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

