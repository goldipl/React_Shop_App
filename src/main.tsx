import { Button } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </React.StrictMode>
)
