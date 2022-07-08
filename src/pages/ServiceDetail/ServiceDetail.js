import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center'>
            <h2>Welcome to service details-{serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary '>Booking Service</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;