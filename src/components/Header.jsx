import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

    <Navbar expand="lg" className="bg-light shadow container p-4 sticky-top">
      <Container fluid>
        <img src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-grocery-list-vector-png-image_7011627.png" alt="" width={'80px'} height={'80px'}/>
        <Navbar.Brand href="#" className='fs-2 ms-2 me-md-5'>Pinch <span className='text-success'>of Yum</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Link to={'/'} className='text-decoration-none'> <Nav.Link href="#action1" className='text-dark fs-5'>Home</Nav.Link> </Link>
            <Link to={'/'} className='text-decoration-none'> <Nav.Link href="#action2" className='text-dark fs-5'>About</Nav.Link> </Link>
            <Link to={'/recipe'} className='text-decoration-none'> <Nav.Link href="#action2" className='text-dark fs-5'>Recipes</Nav.Link> </Link>
            <Nav.Link href="#" className='text-dark fs-5'>Pages</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search our recipes"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header