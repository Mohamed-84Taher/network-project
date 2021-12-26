import React, { useState } from 'react'
import {Card,Button,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addPost} from '../actions/postActions'

function AddPost({authUser}) {
 const [text,setText]=useState("")

const dispatch=useDispatch()

 // add new post for user with id==authUser.id
 const handleClick=()=>{
  if(text){
    const date=new Date()
    const formatDate=`[${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.toLocaleTimeString()}]`
    const id=uuidv4()
    dispatch(addPost({userId:authUser.id,postId:id,text,date:formatDate,comments:[]}))
    setText("")
  }
 }
    return (
        <Card style={{width:"70%",margin:"auto"}}>
        <Card.Header>{`Hi ${authUser.firstName}, What's new ?`}</Card.Header>
        <Card.Body>
        <Form.Control as="textarea" value={text} onChange={e=>setText(e.target.value)} />
        <br/>
          <Button variant="primary" style={{marginLeft:"90%"}} onClick={handleClick}>Publish</Button>
        </Card.Body>
      </Card>
    )
}

export default AddPost
