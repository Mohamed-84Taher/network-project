import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UserCard from "../components/UserCard";
import Posts from "../components/Posts";

function UsersList() {
  const [userPosts, setUserPosts] = useState([]);
  // users list from store
  const users = useSelector(state => state.userReducer.users);
  // posts from store
  const posts = useSelector(state => state.postReducer);
  // get posts of user
  const getUserPosts = id => {
    setUserPosts(posts.filter(post => post.userId === id));
  };

  return (
    <Fragment>
      {users.length === 0 ? (
        <Link to='/addUser'>
          <Button variant='danger' style={{ marginLeft: "43%" }}>
            Create User
          </Button>
        </Link>
      ) : (
        <Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              margin: "auto",
              width: "80%",
            }}
          >
            {users.map(user => (
              <UserCard getUserPosts={getUserPosts} user={user} key={user.id} />
            ))}
          </div>
          <Posts posts={userPosts} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default UsersList;
