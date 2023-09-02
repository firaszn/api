import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const UserCard = ({user}) => {
    const navigate=useNavigate()
  return (
    <div>
         <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg "/>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
      {user.email}
      {user.phone}
      </Card.Text>
      <Button onClick={()=>navigate(`/profile/${user.id}`)} variant="primary">profile</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default UserCard