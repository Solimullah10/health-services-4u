import React from 'react';
import notFound from '../../../src/images/notFound/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger'>Opps!</h1>
            <p >The page you are looking not found</p>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;