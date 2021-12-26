import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addUser} from '../actions/userActions'
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")

   const dispatch=useDispatch()
   const navigate=useNavigate()
    // function add new user
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(firstName&&lastName){
          const id=uuidv4()
         dispatch(addUser({firstName,lastName,id}))
         navigate('/usersList')
        }
    }
    return (
        <Form style={{width:"40%",border:"1px solid #ced4da",borderRadius:"10px",padding:"15px",margin:"auto"}} onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter firstname" onChange={e=>setFirstName(e.target.value)} />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter lastname" onChange={e=>setLastName(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default AddUser
