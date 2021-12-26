import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteComment } from '../actions/postActions'

function Comment({comment,postId}) {
const users = useSelector(state => state.userReducer.users)
const user=users.find(user=>user.id===comment.userId)
const authUser=JSON.parse(localStorage.getItem("user"))

const dispatch=useDispatch()
// function remove comment
const handleDeleteComment=()=>{
    if(window.confirm('Are you sure want remove this !!')){
        dispatch(deleteComment(postId,comment.commentId))
    }
}

    return (
        <div className='comment'>
            <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
            <h6>{user&&user.firstName}</h6>
            <p style={{marginBottom:"0.5rem"}}>:  {comment.text}</p>
            </div>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            <p>{comment.date}</p>
            {(authUser.id===comment.userId)&&<p className='delete' onClick={handleDeleteComment} >Delete</p>}
            </div>
        </div>
    )
}

export default Comment
