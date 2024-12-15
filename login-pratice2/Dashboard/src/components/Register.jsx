import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import axios from "axios"
const addUser=async(data)=>{
  return await axios.post("")
}

const Register = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const {mutate}=useMutation({
    mutationFn:addUser,
  })

const handleSubmit=(e)=>{
  e.preventDefault;
  const data={name, email, password }
  console.log(data);
  mutate(data)

}
  return (
    <div>
      <form >
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Register
