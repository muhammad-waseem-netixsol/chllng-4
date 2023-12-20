import React, {useState} from 'react';
import Address from '../main/Address';
import Logos from '../main/Logos';
import Navbar from '../Navbar/Navbar';

const TopWrapper = ({open,closeWrapper}) => {
  const [close, setClose] = useState(true);
  const onClose = () => {
    setClose(true);
    closeWrapper(false);
    console.log("close");
  };
  console.log("close =>", close);
  console.log("open => ", open)
  console.log(open);
    return (
        <div className={`md:h-screen rounded-3xl max-w-screen lg:w-full w-screen transition bg-black z-10 duration-500 ease ${open && "relative left-0 transition duration-500 ease"} ${close && "absolute top-[-400%] left-0 h-screen"}`}>
        <div className='h-[100px] text-end text-white p-8 text-3xl'><i onClick={onClose} class="fa-solid fa-xmark"></i></div>
      <div className="black text-white p-3 max-w-screen">
        <div className='flex w-full flex-col  border-t border-b sm:flex-row'>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl sm:border-r sm:text-end border-b sm:border-b-0'>OUR WORK</div>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl '>ABOUT</div>
        </div>
        <div className='flex w-full flex-col  border-b sm:flex-row'>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl sm:border-r sm:text-end border-b sm:border-b-0'>OUR WORK</div>
          <div className=' hover:bg-slate-900 cursor-pointer flex-1 p-10 text-white font-bold text-2xl '>ABOUT</div>
        </div>
      </div>
      <Address />
      <Logos />
      </div>
    );
}

export default TopWrapper;
