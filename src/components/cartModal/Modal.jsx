import React, { useEffect, useState } from 'react';
import useProductStore from '../shoppingStore/store';
const Modal = props => {
    const {cart, showModal} = useProductStore();
    const onClose = () => {
        showModal(false);
        document.body.style.overflowY ="auto";
    };
    return (
        <div className={`absolute left-0 top-0 min-h-screen w-screen p-0 m-0 box-border `} style={{background: "rgba(0, 0, 0, 0.8)"}} onClick={onClose}>
        <div className={`z-40 rounded-2xl absolute left-[50%] top-[10%] translate-x-[-50%]  w-[90%] p-2 max-w-[700px] bg-white `} >
            <div className={`w-full h-full relative p-5`}>
            <button className='ml-auto block bg-red-400 rounded-md text-white px-1' onClick={onClose}>close</button>
            </div>
            <div className='text-white px-5'>
                {cart.length === 0 && <h1 className='text-center'>No Item In Cart...</h1>}
                {cart.map(p => <div className='flex text-black justify-between items-center rounded-lg py-5 px-3 bg-slate-200 my-2'>
                    <div className='font-bold'>{p.title}</div>
                    <div className='text-gray-700 italic'>{p.price} / PKR</div>
                </div>)}
                
            </div>
        </div>
        </div>
    );
}

export default Modal;
