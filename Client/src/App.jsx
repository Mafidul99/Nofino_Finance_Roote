
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Auth/AdminLogin'
import AdminRegister from './Pages/Auth/AdminRegister'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Login from './Pages/View/Admin/Login'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<AdminRegister />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
