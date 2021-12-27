import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addComment, deletePost } from "../actions/postActions";
import Comment from "./Comment";

function PostItem({ post }) {
  const [text, setText] = useState("");

  const users = useSelector(state => state.userReducer.users);
  const user = users.find(user => user.id === post.userId);
  const authUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  // function add new comment for post with id===postId
  const handleAdd = () => {
    if (text) {
      const date = new Date();
      const formatDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.toLocaleTimeString()}`;
      const id = uuidv4();
      dispatch(
        addComment(
          { userId: authUser.id, commentId: id, text, date: formatDate },
          post.postId
        )
      );
      setText("");
    }
  };
  // function remove post
  const handleDeletePost = () => {
    if (window.confirm("Are you sure want remove this !!")) {
      dispatch(deletePost(post.postId));
    }
  };

  return (
    <Card style={{ marginTop: "10px", width: "70%" }}>
      <Card.Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {user && `${post.date} ${user.firstName}`}
        {authUser.id === post.userId && (
          <p
            style={{ marginTop: "0.5rem", color: "red" }}
            className='delete'
            onClick={handleDeletePost}
          >
            Delete
          </p>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.text}</Card.Text>
        <hr />
        <Card.Title>Comments</Card.Title>
        {post.comments.map(comment => (
          <Comment
            comment={comment}
            postId={post.postId}
            key={comment.commentId}
          />
        ))}
        <Form.Control
          as='textarea'
          value={text}
          placeholder='Enter your comment'
          onChange={e => setText(e.target.value)}
        />
        <br />
        <Button
          variant='primary'
          style={{ marginLeft: "90%" }}
          onClick={handleAdd}
        >
          Publish
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostItem;
