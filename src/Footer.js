import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render() {
        var getDate = new Date();
        var getYear = getDate.getFullYear();

        return (
            <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand className='m-auto'>
                        Andrew Soden &#169; {getYear}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;