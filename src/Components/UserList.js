import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const [users,setusers]= useState([])
    useEffect(() => {
     axios
     .get('https://jsonplaceholder.typicode.com/users')
     .then((res)=>setusers(res.data))
     .catch((err)=>console.log(err))
    }, [])
    
      return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:'30px'}}>
{
    users.map((user)=><UserCard user={user} key={user.id} />)
}

    </div>
  )
}

export default UserList