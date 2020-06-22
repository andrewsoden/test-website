import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {    
    render() {

    return(
        <MemoryRouter>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand exact href="#/">AS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#/register">Register</Nav.Link>
                    <Nav.Link href="#/users">Users</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </MemoryRouter>
        );
    }
}

export default Header;