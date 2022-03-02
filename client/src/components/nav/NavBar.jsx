import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './navbar.css'

function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/"><span className='nav-color'>Ashveer Bhayroo</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><span className='nav-color'>Home</span></Nav.Link>
                        <Nav.Link href="/about"><span className='nav-color'>About</span></Nav.Link>
                        <Nav.Link href="/projects"><span className='nav-color'>Projects</span></Nav.Link>
                        <Nav.Link href="/sendmail"><span className='nav-color'>Email</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;