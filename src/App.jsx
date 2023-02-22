

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

function App() {
  

  return (
   <BrowserRouter>
   <div>
    <Routes>
    <Route path="/" element={<Dashboard/>} exact/>
    <Route path="/register" element={<Register/>} exact/>
    <Route path="/login" element={<Login/>} exact/>

    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
