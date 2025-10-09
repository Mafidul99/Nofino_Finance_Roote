
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Auth/AdminLogin'
import AdminRegister from './Pages/Auth/AdminRegister'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import AdminDashboard from './Pages/View/Admin/AdminDashboard'
import {Logout} from './Pages/Auth/Logout'
import AppLayout from './layout/AppLayout'
import UserList from './Pages/View/Admin/Users/UserList'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* //user Routes */}
          <Route path='/' element={<AdminLogin />} />
          <Route path='/register' element={<AdminRegister />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> 
            {/* //Admin Routes */}
            <Route path='/admin' element={<AppLayout />}>        
              <Route path='dashboard' element={<AdminDashboard />} />            
              <Route path='user-view' element={<UserList />} />

            </Route>
        </Routes>        
      </BrowserRouter>
    </>
  )
}

export default App
