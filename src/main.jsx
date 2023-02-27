import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAuthProvider from './context/UserAuthcontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthProvider>

    <App />
    </UserAuthProvider>
  </React.StrictMode>,
)
