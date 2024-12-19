import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const addUser=async(user)=>{
  return await axios.post(import.meta.env.VITE_API_URL+"/auth/adduser", user)
}

const Register = () => {
  const [username, setUserName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const navigate=useNavigate();

  const {mutate,isLoading, isError, error, isFetching }=useMutation({
    mutationFn:addUser,
  })

  console.log(import.meta.env.VITE_API_URL+"/auth/adduser")
const handleSubmit=(e)=>{
  e.preventDefault();
  const user={username, email, password }
  console.log(user);
  mutate(user)
  navigate('/')
}
if (isLoading) {
  return <div>Loading....</div>
}
if (isError) {
  return <div>{error.response?.data?.error || error.message}</div>
}
  return (
    <div>
      <form >
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Register
