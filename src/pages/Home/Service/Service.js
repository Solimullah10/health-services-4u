import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate, } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, title, description, img } = service;

    const handleServiceDetails = (id) => {
        navigate(`/service/${id}`)

    }
    return (
        <CardGroup className='row gx-4'>
            <Card className='row'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-uppercase'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => handleServiceDetails(id)} className='btn btn-primary w-100'>Show Details</button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Service;