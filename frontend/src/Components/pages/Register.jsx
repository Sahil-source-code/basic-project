import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password
      },{
        withCredentials:true,
        origin:"http://localhost:5173"
      })

      console.log(res.data)
      alert("User Registered Successfully")
    } catch (err) {
      console.error(err)
      alert("Error registering user")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Register