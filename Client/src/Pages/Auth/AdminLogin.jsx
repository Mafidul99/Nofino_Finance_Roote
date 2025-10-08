import React from 'react'
import logoPng from '../../assets/logo/Finance13.png';

const AdminLogin = () => {
    return (
        <>
            <div class="bg-green-100 h-screen">
                <div class="flex min-h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div class="text-center sm:mx-auto sm:w-full sm:max-w-md">
                        <h1 class="text-3xl font-extrabold text-gray-900 flex items-center justify-center uppercase">
                           <img src={logoPng} alt="Main_Logo" className='inline-block w-16' /> 
                            Admin Login
                        </h1>
                    </div>
                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div class="bg-white shadow-lg px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">                           
                            <form class="space-y-6">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email address /
                                        Username</label>
                                    <div class="mt-1">
                                        <input type="email" name='email' placeholder='Email address / Username' required
                                            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
                                    </div>
                                </div>
                                <div>
                                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                    <div class="mt-1">
                                        <input type="password" name='password' placeholder='Password' required
                                            className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50" />
                                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                                    </div>
                                    <div class="text-sm">
                                        <a class="font-medium text-indigo-400 hover:text-indigo-500" href="">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <div class="m-auto mt-6 w-fit md:mt-8">
                                <span class="m-auto">Don't have an account?
                                    <a class="font-semibold text-indigo-600" href="/register"> Create Account</a>
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