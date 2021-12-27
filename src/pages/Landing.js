import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Landing() {
  return (
    <div className='mb-2' style={{ marginLeft: "35%", marginTop: "170px" }}>
      <Link to='/addUser'>
        <Button variant='primary' size='lg'>
          Create User
        </Button>
      </Link>{" "}
      <Link to='/userslist'>
        <Button variant='primary' size='lg'>
          Users List
        </Button>
      </Link>{" "}
      <Link to='/blog'>
        <Button variant='primary' size='lg'>
          Blog
        </Button>
      </Link>
    </div>
  );
}

export default Landing;
