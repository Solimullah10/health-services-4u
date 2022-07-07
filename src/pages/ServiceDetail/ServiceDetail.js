import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = (props) => {
    console.log(props?.id);
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to service details-{serviceId}</h2>

        </div>
    );
};

export default ServiceDetail;