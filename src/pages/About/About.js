import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import profilePic from '../../../src/images/profilepic/mypic.jpg';

const About = () => {
    return (
        <div className=' container d-flex mt-5 '>

            <Row>
                <Col className='text-center'></Col>
            </Row>

            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={profilePic} alt="" />
                    <Card.Body>
                        <Card.Title>Web-Developer</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='text-success fs-5'>Personal Information</ListGroup.Item>
                        <ListGroup.Item> Name: Md. Solimullah</ListGroup.Item>
                        <ListGroup.Item>Mob: 01517850451</ListGroup.Item>
                        <ListGroup.Item>Gmail: mdsolimullah10@gmail.com</ListGroup.Item>
                        <ListGroup.Item>Country: Bangladesh</ListGroup.Item>
                        <ListGroup.Item>Division: Dhaka </ListGroup.Item>
                        <ListGroup.Item>District: Tangail </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <Card className="text-center">
                <Card.Header className='text-success fs-2'>Resume Md. Solimullah</Card.Header>
                <Card.Body>
                    <Card.Title>My carrier Goal Next Six Month</Card.Title>
                    <Card.Text>
                        Blessing my Allah. Now I am starting web developer. I will learn it. It performances to the highly professional side job. Because now I would wanted to 6 month or on December on the way job sector good position. My preparation for this html, css, bootstrap, javascript, tailwind, react, mongodb etc. Its side can be most important tropics secure and full free prepared than any other marketplace opportunity want it. As for as My future well aim in life and acquire. So my life is hard working pre cultivation and then future can be good job next 6 month Insa-Allah.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Target next 6 month</Card.Footer>
            </Card>
        </div>
    );
};

export default About;