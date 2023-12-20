import React from 'react';
import "./Main.css";
import "../../App.css";
import Navbar from '../Navbar/Navbar';

const Main = (props) => {
    const topBarHandler = show => {
        props.showTop(true);
    }
    return (
        <div className='bg-white rounded-3xl my-1 p-3 min-h-screen md:h-screen flex flex-col justify-between 3xl:justify-start 3xl:gap-10 pb-28 xl:h-[800px]'>
            <Navbar handleTop={topBarHandler}/> 
            <div className='flex-col bg-trans z-20 justify-evenly items-center sm:w-[60%] xl:w-[50%]' data-aos="zoom-in-up">
            <div className='font-semibold text-start py-5 text-3xl md:text-5xl lg:text-7xl z-10' style={{ fontFamily: 'Mona Sans, sans-serif' }}>Award-winning development studio based in Denmark.</div>
            <div className='text-lg font-semibold text-justify break-words text-gray-600 z-10'style={{ fontFamily: 'Mona Sans, sans-serif' }}>We are a development studio working at the intersection of design and technology. It’s a really busy intersection though — a lot of our staff have been involved in hit and runs.</div>
            </div>
        </div>
    );
}

export default Main;
