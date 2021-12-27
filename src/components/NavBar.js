import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg='light' variant='light' style={{ marginBottom: "100px" }}>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link
            as={Link}
            to='/'
            style={{ color: "#6c757d", fontFamily: "Georgia" }}
          >
            <i className='fas fa-chart-network'></i> Network
          </Nav.Link>
        </Nav>
        <Form className='d-flex'>
          <FormControl
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
          />
          <Button variant='outline-secondary'>Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
