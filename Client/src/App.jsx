
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Auth/AdminLogin'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
