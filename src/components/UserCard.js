import React from 'react'
import {Card,Button} from 'react-bootstrap'

function UserCard({user,getUserPosts}) {
    return (
        <Card style={{width:"30%",marginTop:"50px",fontFamily:'roboto'}}>
        <Card.Header><i class="fas fa-user"></i></Card.Header>
        <Card.Body>
          <Card.Title>{user.firstName}</Card.Title>
          <Card.Title>{user.lastName}</Card.Title>
          <Button variant="primary" onClick={()=>getUserPosts(user.id)}>Show posts</Button>
        </Card.Body>
      </Card>
    )
}

export default UserCard
