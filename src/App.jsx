

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Groups from './pages/Groups'
import Navbar from './components/Navb'
import Navb from './components/Navb'
import Addexpense from './pages/Addexpense'
import Addgroup from './pages/Addgroup'
import Addmember from './pages/Addmember'
import Payment from './pages/Payment'

function App() {
  

  return (
   <BrowserRouter>
   <Navb/>
   <div>
    <Routes>
    <Route path="/dash" element={<Dashboard/>} exact/>
    <Route path="/addgroup" element={<Addgroup/>} exact/>
    <Route path="/addmember" element={<Addmember/>} exact/>
    <Route path="/register" element={<Register/>} exact/>
    <Route path="/" element={<Login/>} exact/>
    <Route path="/addexpense" element={<Addexpense/>} exact/>
    <Route path="/groups/:id" element={<Groups/>} exact/>
    <Route path="/payment" element={<Payment/>} exact/>

    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
