import React, { useEffect, useState } from 'react'

import { useAuth } from '../../../../store/auth';
import { NavLink } from 'react-router-dom';

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const UserList = () => {

  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {

    const URL = `${import.meta.env.VITE_API_URL}/api/admin/users`;
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getAllUsersData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      <div className="container px-4 py-8 mx-auto">
          <h2 className="font-serif text-2xl font-semibold leading-tight text-gray-700 underline uppercase">User Listing</h2>
        <div className="flex justify-between mb-6 flex-colitems-start">
          <p className="mt-2 text-lg text-gray-600">List of all registered users</p>
          <span className="items-start justify-between text-lg text-gray-700">
            Total Users: <strong>{users.length}</strong>
          </span>
        </div>
        <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
          <div className="w-full mb-4 md:w-1/3 md:mb-0">
            <input type="text" placeholder="Search users..." className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <NavLink to="/admin/users/new" className="flex">
            <button className="w-full px-5 py-2 text-white transition duration-300 bg-green-500 rounded-full hover:bg-pink-500">
              <FaPlus size={16} className='inline-block mr-2'/> 
              Add New
            </button>
          </NavLink>

        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {
                users.map((curUser, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-6 py-3 text-left">{curUser.DEC}</td>
                    <td className="px-6 py-3 text-left">{curUser.username}</td>
                    <td className="px-6 py-3 text-left">{curUser.email}</td>
                    <td className="px-6 py-3 text-left">{curUser.phone}</td>
                    <td className="px-6 py-3 text-left">Admin</td>
                    <td className="px-6 py-3 text-left">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <div className="flex justify-center item-center">
                        <button className="w-4 mr-2 text-green-500 transform hover:text-blue-500 hover:scale-110">
                          <FaRegEdit />
                        </button>
                        <button className="w-4 mr-2 text-red-500 transform hover:text-red-500 hover:scale-110">
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <span className="text-sm text-gray-700">              
              Showing 
              <span className="font-semibold text-gray-900"> 1 </span> 
              to 
              <span className="font-semibold text-gray-900"> {users.length} </span> 
              of 
              <span className="font-semibold text-gray-900"> 10 </span> 
              Entries
            </span>
          </div>         
        </div>
      </div>
    </>
  )
}

export default UserList