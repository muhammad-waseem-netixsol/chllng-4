import React, { useEffect, useState } from 'react';
import useProductStore from '../shoppingStore/store';
const Modal = props => {
    const {cart, showModal, setCartLength} = useProductStore();

    const consolidateCart = () => {
        const consolidatedCart = cart.reduce((acc, product) => {
          const existingProductIndex = acc.findIndex((item) => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            acc[existingProductIndex].quantity += 1;
          } else {
            acc.push({ ...product, quantity: 1 });
          }
    
          return acc;
        }, []);
         
        return consolidatedCart;
      };
     
      const consolidatedCart = consolidateCart();
    
      
    console.log("consolidatted => " ,consolidatedCart)
    const onClose = () => {
        showModal(false);
        document.body.style.overflowY ="auto";
    };
    const stopPropagrateHandler = (event) => {
        event.stopPropagation();
    };
    return (
        <div className={`absolute z-40 left-0 top-0 h-screen w-screen p-0 m-0 box-border `} style={{background: "rgba(0, 0, 0, 0.9)"}} onClick={onClose}>
        <div className={`z-40 rounded-2xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[600px] overflow-y-scroll w-[90%] p-2 max-w-[700px] bg-white `} onClick={stopPropagrateHandler}>
            <div className={`w-full h-full relative p-5`}>
            <button className='ml-auto block bg-red-400 rounded-md text-white px-1' onClick={onClose}>close</button>
            </div>
            <div className='text-white px-5 h-full'>
                {cart.length === 0 && <h1 className='text-center text-black'>No Item In Cart...</h1>}
                {consolidatedCart.map(p => <div className='flex text-black justify-between items-center rounded-lg py-5 px-3 bg-slate-200 my-2'>
                    <div className='font-bold'>{p.title}</div>
                    <div className='text-gray-700 italic'>{p.price} x {p.quantity} = {p.price * p.quantity} / PKR</div>
                </div>)}
            </div>
        </div>
        </div>
    );
}

export default Modal;
