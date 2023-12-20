import React from 'react';
const IMAGES = [{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},{src: "https://studio.tailwindui.com/_next/static/media/logo-light.ada2d552.svg"},]
const Badge = () => {
    return (
        <div className='bg-black rounded-3xl md:p-40 sm:p-28 p-10' data-aos="fade-left">
            <div className='flex justify-between items-center flex-col sm:flex-row '>
                <div className='basis-[30%] text-white font-semibold'>We’ve worked with hundreds of amazing people</div>
                <div className='sm:basis-[66%] sm:py-5 w-full py-3'><hr /></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
                {IMAGES.map(img => <div><img src={`${img.src}`} alt="ui" /></div>)}
                
            </div>
        </div>
    );
}

export default Badge;
