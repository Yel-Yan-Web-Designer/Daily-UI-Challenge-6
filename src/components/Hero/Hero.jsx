import React from 'react';
import desktopImg from "../../images/desktop/image-header.jpg";
import mobileImg from "../../images/mobile/image-header.jpg";
import arrowDown from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="hero relative h-screen w-screen flex justify-center items-start mt-16 fraun">
      <picture className='fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 min-w-full min-h-full w-auto h-auto -z-10'>
        <source media='(min-width: 768px )' srcSet={desktopImg}/> 
        <img src = {mobileImg}/>
      </picture>

    <div className="nav-content flex flex-col items-center justify-center text-center  gap-y-10">
        <h1 className='text-6xl text-white font-bold'>We Are Creatives</h1>
        <div className="">
          <img src ={arrowDown} alt='arrow down'/>
        </div>
      </div>
    </div>
  )
}

export default Hero