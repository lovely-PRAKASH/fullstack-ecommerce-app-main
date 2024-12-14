import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUserName] = useState("");
    const [dob, setDob] = useState(""); // Consistent casing
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();

        console.log({ username, dob, email, password });
        const userdata = { username, dob, email, password }; // Consistent casing for `dob`

        await axios.post(`${import.meta.env.VITE_API_URL}/register`, userdata)
            .then((res) => {
                if (res.data.success) {
                    console.log("Registration successful");
                    navigate("/login"); 
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexDirection: "column", width: "60%", alignItems: "center" }}>
                <input onChange={(e) => setUserName(e.target.value)} value={username} type="text" placeholder="Username" />
                <input onChange={(e) => setDob(e.target.value)} value={dob} type="text" placeholder="DOB (YYYY-MM-DD)" />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
