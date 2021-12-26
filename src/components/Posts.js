import React from 'react'
import PostItem from './PostItem'

function Posts({posts}) {
   
    return (
        <div style={{marginLeft:"185px",width:"100%"}}>
            {
                posts.map(post=><PostItem post={post}  key={post.postId}/>)
            }
        </div>
    )
}

export default Posts
