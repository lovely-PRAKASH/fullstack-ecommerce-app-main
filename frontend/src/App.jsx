import React from 'react'
import Register from "./pages/Register"
import ShowData from './pages/ShowData'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userdetail' element={<ShowData/>}/>
      </Routes>
    </div>
  )
}

export default App
