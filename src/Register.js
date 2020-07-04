import React, { Component } from 'react';

import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import "./App.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLastName: '',
            phoneNumber: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            ausState: 'NSW',
            color: '',
            zip: '',
            radioPet: '',
            coffeeCheckbox: false,
        };
        this.baseState = this.state;
    }

    resetToTop() {
        window.scrollTo(0, 0);
    }

    onChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    onCheckboxHandler = () => {
        this.setState({
            coffeeCheckbox: !this.state.coffeeCheckbox
        });
    }

    onRadioHandler = nr => () => {
        this.setState({
            radioPet: nr
        });
    }

    onSelectionHandler = (event) => {
        this.setState({ ausState: event.target.value });
    }

    onSubmitHandler = (event) => {
        alert('Form submitted - have a great day');
        this.setState(this.baseState);
        this.resetToTop();
        event.preventDefault();
    }

    render() {

        return (
            <Container className="center-col">
                <br />
                <h2>Register</h2>
                <br />
                <Form onSubmit={this.onSubmitHandler}>
                    <Form.Group controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            placeholder="First and Last Name"
                            name="firstLastName"
                            value={this.state.firstLastName}
                            onChange={this.onChangeHandler}
                            maxLength={50}
                            required
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.onChangeHandler}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                maxLength={50}
                                required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formAddress1">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control
                            placeholder="Address 1"
                            name="address1"
                            value={this.state.address1}
                            onChange={this.onChangeHandler}
                            maxLength={50}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                            placeholder="Address 2"
                            name="address2"
                            value={this.state.address2}
                            onChange={this.onChangeHandler}
                            maxLength={50}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChangeHandler}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                as="select"
                                value={this.state.ausState}
                                onChange={this.onSelectionHandler}
                                required
                            >
                                <option value="NSW">NSW</option>
                                <option value="QLD">QLD</option>
                                <option value="SA">SA</option>
                                <option value="TAS">TAS</option>
                                <option value="VIC">VIC</option>
                                <option value="WA">WA</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="tel"
                                pattern="[0-9]{4}"
                                maxLength={4}
                                placeholder="Zip"
                                name="zip"
                                value={this.state.zip}
                                onChange={this.onChangeHandler}
                                required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label>Are You a Cat or Dogs Person?</Form.Label>
                        <div className="mb-3">
                            <Form.Check
                                inline
                                label="Cats"
                                type="radio"
                                checked={this.state.radioPet === 1 ? true : false}
                                onChange={this.onRadioHandler(1)}
                            />
                            <Form.Check
                                inline
                                label="Dogs"
                                type="radio"
                                checked={this.state.radioPet === 2 ? true : false}
                                onChange={this.onRadioHandler(2)}
                            />
                            <Form.Check
                                inline
                                label="Both"
                                type="radio"
                                checked={this.state.radioPet === 3 ? true : false}
                                onChange={this.onRadioHandler(3)}
                            />
                            <Form.Check
                                inline
                                label="Neither"
                                type="radio"
                                checked={this.state.radioPet === 4 ? true : false}
                                onChange={this.onRadioHandler(4)}
                            />
                        </div>
                    </Form.Row>

                    <Form.Group>
                        <Form.Check
                            label="Do you love coffee?"
                            name="coffeeCheckbox"
                            checked={this.state.coffeeCheckbox}
                            onChange={this.onCheckboxHandler}
                        />
                    </Form.Group>

                    <>
                        <Button variant="primary" size="lg" block type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" size="lg" block onClick={this.onResetHandler}>
                            Clear Form
                        </Button>
                    </>
                </Form>
                <br />
                <br />
                <br />
            </Container >
        );
    }
}

export default Register;