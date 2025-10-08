import React, { useState } from 'react'
import logoPng from '../../assets/logo/Finance13.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const URL = `${import.meta.env.VITE_API_URL}/api/auth/login`;

    const { storeTokenInLs } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                // storetoken(data.token);
                storeTokenInLs(data.token);
                alert("Login successful:", data);
                setUser({ email: "", password: "" });
                navigate("/dashboard");
            } else {
                alert("Login failed:", response.statusText);
                navigate("/");
            }
        } catch (error) {
            console.error("login:", error);
        }
    };
    return (
        <>
            <div className="bg-[#ecf0f5] h-screen">
                <div className="flex min-h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
                        <h1 className="flex items-center justify-center text-3xl font-extrabold text-gray-900 uppercase">
                            <img src={logoPng} alt="Main_Logo" className='inline-block w-16' />
                            Admin Login
                        </h1>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="px-4 py-8 bg-white shadow-lg sm:rounded-lg sm:px-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address /
                                        Username</label>
                                    <div className="mt-1">
                                        <input type="email" name='email' id='email' placeholder='Email address / Username' required
                                            value={user.username} onChange={handleChange}
                                            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div className="mt-1">
                                        <input type="password" name='password' id='password' placeholder='Password' required
                                            value={user.password} onChange={handleChange}
                                            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50" />
                                        <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">Remember me</label>
                                    </div>
                                    <div className="text-sm">
                                        <NavLink className="font-medium text-indigo-400 hover:text-indigo-500" to="/forgot-password">
                                            Forgot your password?
                                        </NavLink>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <div className="m-auto mt-6 w-fit md:mt-8">
                                <span className="m-auto">Don't have an account?
                                    <NavLink className="font-semibold text-indigo-600" to="/register"> Create Account</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin;