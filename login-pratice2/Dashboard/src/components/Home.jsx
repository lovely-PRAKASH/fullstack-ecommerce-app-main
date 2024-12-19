import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
const getUsers = () => {
  return axios.get(import.meta.env.VITE_API_URL + "/auth/users")
}
const Home = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.response?.data?.error || error.message}</div>
  }
  console.log(data.data.users, "data")
  return (
    <div>
      Welcome home!
      <table style={{ width: "100%", borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>E-mail</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>createdAt</th>
          </tr>
        </thead>
        <tbody >
          {
            data?.data.users.map((user) => {
              return <tr >
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.username}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.email}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.createdAt}</td>

              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
