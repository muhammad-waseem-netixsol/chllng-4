import React from 'react';
import NavSvg from '../Navbar/NavSvg';

const Footer = () => {
    return (
        <div className='py-10 sm:w-[90%] mx-auto'>
            <hr />
            <div className='flex justify-between items-center py-10'>
                <NavSvg />
                <div className='italic text-gray-500'>© Studio Agency Inc. 2023</div>
            </div>

        </div>
    );
}

export default Footer;
