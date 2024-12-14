import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();

    const user = { email, password }
    console.log(user, "form data")
    await axios.post(import.meta.env.VITE_API_URL + "/getlogin", user)
      .then((res) => {
        try {
          if (res.data.success) {
           console.log("login success");
           console.log(res.data);
           localStorage.setItem("user",JSON.stringify(res.data.user));
           navigate('/userdetail')
          }
        } catch (err) {
           console.log(err);
        }
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "60%", alignItems: "center", gap: "10px" }}>
        <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='E-mail' />
        <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password' />

        <button type='submit'>submit</button>
      </form>
      <button><Link to="/ ">register</Link></button>
    </div>
  )
}

export default Login
