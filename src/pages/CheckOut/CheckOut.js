import React, { useEffect, useState } from 'react';
import Booking from '../Home/Services/Booking/Booking';

const CheckOut = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            This is checkout page.
            {
                services.map(service => <Booking

                ></Booking>)
            }
        </div>
    );
};

export default CheckOut;