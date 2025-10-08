
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Auth/AdminLogin'
import AdminRegister from './Pages/Auth/AdminRegister'
import ForgotPassword from './Pages/Auth/ForgotPassword'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/register' element={<AdminRegister />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
