import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function contact() {
  return (
    <Container>
        <Row xs={1} md={2} >
            <Col></Col>
            <Col className='formClass'>
                <Form>
                    <h2>
                        Contact Us
                    </h2>
                    <Row xs={1} md={2} >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" aria-label="Message" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        {/* <Row xs={1} md={2} lg={4}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>
        </Row>
        <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        </Row> */}
    </Container>
  );
}

export default contact;