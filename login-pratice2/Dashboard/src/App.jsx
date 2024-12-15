import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
const App = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
