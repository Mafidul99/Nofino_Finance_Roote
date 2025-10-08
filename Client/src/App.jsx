
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Auth/AdminLogin'
import AdminRegister from './Pages/Auth/AdminRegister'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Dashboard from './Pages/View/Admin/AdminDashboard'
import {Logout} from './Pages/Auth/Logout'
import AppLayout from './layout/AppLayout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<AdminLogin />} />
          <Route path='/register' element={<AdminRegister />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> 
            <Route element={<AppLayout />}>        
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>        
      </BrowserRouter>
    </>
  )
}

export default App
