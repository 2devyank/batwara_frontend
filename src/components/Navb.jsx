import React from 'react'
import { Button, Form, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ".."
function Navb() {
  return (
    <>
     <Navbar style={{backgroundColor:"rgb(68, 131, 202)",height:"10vh"}}   expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Batwara</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Navb