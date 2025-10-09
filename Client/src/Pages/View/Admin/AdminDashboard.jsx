import React from 'react'
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../store/auth';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-[22px] font-bold font-serif uppercase">Admin Dashboard -
        <span className='text-green-500 text-[25px] font-bold font-serif uppercase underline'> {user?.username}</span>
      </h1>
      <p className="mt-2">Manage users, view stats, and control access.</p>

      <NavLink to="/logout" className="text-blue-500 hover:underline">LogOut</NavLink>
    </div>
  )
}

export default AdminDashboard;