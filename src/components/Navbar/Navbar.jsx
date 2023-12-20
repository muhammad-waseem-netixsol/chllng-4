import React, { useState } from 'react';
import NavSvg from './NavSvg';
import Hamburger from './Hamburger';
import CartIcon from './CartIcon';
const Navbar = (props) => {
    const [navbarStick, setNavbarStick] = useState(false);
    const topWrapperHandle = status => {
        setNavbarStick(status);
        props.handleTop(status);
    }
    return (
        <div className={` z-10 flex justify-between items-center py-3 ${navbarStick ? "fixed left-0 top-3 w-full z-40 p-5" : ""}`}>
             <div data-aos="fade-left">
                <NavSvg />
             </div>
             
             <div className='flex justify-center items-center gap-2' data-aos="fade-right">
                <div><CartIcon /></div>
                <button style={{ fontFamily: 'Mona Sans, sans-serif' }} className={`bg-black rounded-full sm:px-5 px-3 py-2 text-base font-medium capitalize text-white hidden md:block ${navbarStick && "bg-white text-slate-950"}`}>contact us</button>
                {/* <button className='bg-black rounded-full px-5 py-2 text-base font-medium capitalize text-white'>cart <span>0</span></button> */}
                <Hamburger showTopWrapper={topWrapperHandle}/>
             </div>   
        </div>
    );
}

export default Navbar;
