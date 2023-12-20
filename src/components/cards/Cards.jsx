import React from 'react';
const CARD_DETAILS = [{
    img: "https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg",
    year: 2023,
    heading: "Skip the bank, borrow from those you trust",
    para: "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution."
},{
    img: "https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg",
    year: 2023,
    heading: "Skip the bank, borrow from those you trust",
    para: "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution."
},{
    img: "https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg",
    year: 2023,
    heading: "Skip the bank, borrow from those you trust",
    para: "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution."
},]
const Cards = () => {
    return (
        <div style={{ fontFamily: 'Mona Sans, sans-serif' }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-stretch p-5 my-20 rounded-3xl gap-5 md:gap-10 md:w-[95%] mx-auto flex-col  sm:flex-row w-full'>
            {CARD_DETAILS.map((card, i) => <div className={`flex flex-1 justify-between gap-8 p-5 flex-col border rounded-xl cursor-pointer hover:bg-slate-100 hover:shadow-xl py-5`} data-aos="fade-right">
                <div><img className='h-[64px] w-[64px]' src={`${card.img}`} alt="" /></div>
                <div className='font-medium py-5'>{card.year}<span className='text-base font-normal text-gray-700'>/ case study</span></div>
                <h3 className='font-bold text-3xl'>{card.heading}</h3>
                <p className='font-medium'>{card.para}</p>
            </div>)}
            
        </div>
    );
}

export default Cards;
