

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Groups from './pages/Groups'
import Navbar from './components/Navb'
import Navb from './components/Navb'
import Addexpense from './pages/Addexpense'
import Addgroup from './pages/Addgroup'

function App() {
  

  return (
   <BrowserRouter>
   <Navb/>
   <div>
    <Routes>
    <Route path="/dash" element={<Dashboard/>} exact/>
    <Route path="/addgroup" element={<Addgroup/>} exact/>
    <Route path="/register" element={<Register/>} exact/>
    <Route path="/" element={<Login/>} exact/>
    <Route path="/addexpense" element={<Addexpense/>} exact/>
    <Route path="/groups/:id" element={<Groups/>} exact/>

    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
