import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ShowData = () => {
const storeddata=JSON.parse(localStorage.getItem("user"))
console.log(storeddata)
  return (
    <div>
        <h1>UserData</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>DOB</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>E-mail</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Password</th>
          </tr>
        </thead>
        <tbody>
             <tr>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{storeddata.username}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{storeddata.dob}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{storeddata.age}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{storeddata.email}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{storeddata.password}</td>
            </tr>
        </tbody>
      </table>
      <h1 ><Link to="/login">Go to login</Link></h1>
    </div>
  )
}

export default ShowData
