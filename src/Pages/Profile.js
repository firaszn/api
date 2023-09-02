import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Profile = () => {
    const {id}=useParams()
    const navigate=useNavigate()

    const [user,setuser]= useState([])
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((res)=>setuser(res.data[0]))
        .catch((err)=>console.log(err))
       }, [id])
  return (
    <div>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg "/>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
      {user.email}
      {user.phone}
      {user.adress?.city}

      </Card.Text>
      <Button onClick={()=>navigate(-1)} variant="primary">back</Button>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Profile