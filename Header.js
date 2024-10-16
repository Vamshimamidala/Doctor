 import React from 'react'
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
import NavLink from 'react-bootstrap/esm/NavLink';
 const Header = () => {
   return (
     <div>
       <header className='head' >
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hosptal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/About">About</NavLink>
            <NavLink href="/TreatMent">TreatMent</NavLink>
            <NavLink href="/Book Appoinment">Book Appoinment</NavLink>
            <NavLink href="/Conact Us">Conact Us</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </header>
     </div>
   )
 }
 
 export default Header
 