import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-secondary p-5 '>
            <p className='text-white text-center'>copyright &copy; {new Date().getFullYear()} </p>
        </footer>

    );
};

export default Footer;