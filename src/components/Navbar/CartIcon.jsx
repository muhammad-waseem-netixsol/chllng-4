import React from 'react';
import useProductStore from "../shoppingStore/store";
const CartIcon = () => {
    const {cart, showModal} = useProductStore();
 
    const showmodal = () => {
        showModal(true);
        document.body.style.overflow = "hidden";
    }
    return (
        <div className='text-2xl rounded-full py-1 flex justify-center items-center cursor-pointer'>
           <button onClick={showmodal} className={`bg-black rounded-full w-full block sm:px-5 px-3 py-2 text-base font-medium capitalize text-white`}>cart ({cart.length > 0 ? cart.length : 0})</button>
        </div>
    );
}

export default CartIcon;
