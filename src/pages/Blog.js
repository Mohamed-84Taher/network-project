import React from 'react'
import { useSelector } from 'react-redux'
import AddPost from '../components/AddPost'
import Posts from '../components/Posts'

function Blog() {
    const authUser=JSON.parse(localStorage.getItem("user"))
    const posts = useSelector(state=>state.postReducer)

    return (
        <div>
            <AddPost authUser={authUser} />
            <Posts posts={posts} />
        </div>
    )
}

export default Blog
