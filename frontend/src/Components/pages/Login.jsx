import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-500 ml-1 hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login