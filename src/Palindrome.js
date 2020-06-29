import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredWord: "",
            originalWord: "",
            reverseWord: "",
            displayResult: false,
            isPalindrome: false
        };

        this.baseState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ enteredWord: event.target.value });
    }

    checkPhrase(enteredWord) {
        var originalWord = enteredWord;
        var reverseWord = enteredWord;

        reverseWord.split("").reverse().join("");

        if (reverseWord === originalWord)
        {
            this.setState({ isPalindrome: true });
            this.setState({ displayResult: true });
        }
        else 
        {
            this.setState({ isPalindrome: false });
            this.setState({ displayResult: true });
        }
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.enteredWord);
        this.checkPhrase(this.state.enteredWord);
        this.setState(this.baseState);
        event.preventDefault();
    }

    render() {

        return (
            <Jumbotron>
                <h1>Palindrome Checker</h1>
                <p>
                    A palindrome is the same word forward and backwards.
                    <br />Enter a single word below and let us check to see if it is a palindrome!
                </p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formPalindrome">
                        <Form.Control
                            type="text"
                            placeholder="Enter a word"
                            value={this.state.enteredWord}
                            onChange={this.handleChange}
                        />
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br />
                        <br />

                        {this.state.isPalindrome === true && this.state.displayResult === true &&
                            < Row className="resultIsPalindrome">
                                <Col>Nice work - that is a palindrome</Col>
                            </Row>
                        }

                        {this.state.isPalindrome === false && this.state.displayResult === true &&
                            <Row className="resultNotPalindrome">
                                <Col>Oops - that is not a palindrome</Col>
                            </Row>
                        }

                    </Form.Group>
                </Form>
            </Jumbotron >
        );
    }
}

export default Palindrome;