import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-50 d-block d-flex justify-content-center align-items-center mx-auto'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;