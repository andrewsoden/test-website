import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {    
    render() {

    return(
        <MemoryRouter>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand 
                    href="#/"
                    id="linkHome"
                >
                    AS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link 
                        href="#/register"
                        id="linkRegister"
                    >
                        Register
                    </Nav.Link>
                    <Nav.Link 
                        href="#/palindrome"
                        id="linkPalindrome"
                    >
                        Palindrome
                    </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </MemoryRouter>
        );
    }
}

export default Header;