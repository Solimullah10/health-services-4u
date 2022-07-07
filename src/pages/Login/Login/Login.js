import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2 className='text-center'>Please Login!!!</h2>
            <Form className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p>Create an Account? <Link to='/register'>Register here</Link></p>

                <Button
                    className='mb-3 w-50 mx-auto d-block'
                    variant="primary"
                    type="submit">
                    Log In
                </Button>
                <Button
                    className='mb-3 w-50 mx-auto d-block'
                    variant="info"
                    type="submit">
                    Sign In With Google
                </Button>
            </Form>
        </div >
    );
};

export default Login;