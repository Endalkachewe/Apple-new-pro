// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "./Resources/css/bootstrap.css"
// import "./Resources/css/styles.css"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import libraries and CSS here, NOT in index.html
import 'bootstrap/dist/css/bootstrap.min.css'; // The correct way to add Bootstrap CSS
import './Resources/css/styles.css' // Your custom styles
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
