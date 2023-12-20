import React, { useState, useRef } from 'react';
import img from "../../assets/d.png";
import "./Shopping.css";
import useProductStore from '../shoppingStore/store';
const Products = () => {
    const [last, setLastPage] = useState(false);
    const [page, setPage] = useState(false);
    const { products, currentPage, totalPages, itemsPerPage, setCurrentPage, addToCart, nextPage, prevPage, cart } = useProductStore();
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    let pages = [];
    const renderPagination = () => {
        const pagesToShow = 3; 
        const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
        pages = [];
       
        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            <button class={`h-[30px] ${i === currentPage && "bg-black text-white"} flex justify-center items-center w-[30px] sm:mx-10 rounded-full border-2 border-black hover:bg-black hover:text-white`} key={i} onClick={() => handlePageChange(i)} disabled={currentPage === i}>
              {i}
            </button>
          );
        }}
        renderPagination();
        const nextPageHandle = () => {
            if(currentPage === totalPages){
                setLastPage(true);
            }else{
                setLastPage(false);
                nextPage();
            }
        };
        const prevPageHandle = () => {
            if(currentPage === 1){
                setPage(true);
            }else{
                setPage(false);
                prevPage();
            }
        };
        const addToCartHandler = (id) => {
            addToCart(id);
        }
        
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5'>
            {paginatedProducts.length !== 0 && paginatedProducts.map(product => <div key={product.image} className={`border max-a-max hover:shadow-lg rounded-lg`} data-aos="flip-up" >
            <div className="h-[356px] w-full flex justify-center items-center overflow-hidden">
                <img className='block h-full w-full' src={`${product.category.image}`} alt="" />
            </div>
            <div className='text-end p-2'><button style={{ fontFamily: 'Mona Sans, sans-serif' }} className='rounded-full bg-black text-white text-sm px-3 py-2 border-2 hover:shadow-xl  border-black hover:bg-white hover:text-black' onClick={()=> {addToCartHandler(product.id)}}>ADD TO CART</button></div>
            </div>)}
        </div>
        <div className='flex justify-center items-center md:gap-5 sm:gap-3 gap-1 py-10'>
            <button onClick={prevPageHandle} class="h-[30px] flex justify-center items-center w-[30px] sm:mx-10 mx-2 sm:rounded-full border-2 border-black hover:bg-black hover:text-white">
                <i class="fa-solid fa-arrow-left"></i>
                </button>
                {pages}
            <button onClick={nextPageHandle} disabled={last} className='h-[30px] flex justify-center items-center w-[30px] sm:mx-10 mx-2 sm:rounded-full border-2 border-black hover:bg-black hover:text-white'>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    );
}

export default Products;
