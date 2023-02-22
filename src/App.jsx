

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Navbar from './components/Navb'
import Navb from './components/Navb'

function App() {
  

  return (
   <BrowserRouter>
   <Navb/>
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
