import React from 'react';
import fb from '../../images/icon-facebook.svg';
import ig from '../../images/icon-instagram.svg';
import twt from '../../images/icon-twitter.svg';
import pin from '../../images/icon-pinterest.svg';

const Footer = () => {

  return (
    <footer className='bg-footer p-16'>
      <h1 className='text-center md:text-4xl text-2xl font-bold design-txt mb-6'>sunnyside</h1>
      <div className="flex gap-x-6 mx-auto justify-center items-center mb-16">
        <a href="#" className='design-txt md:text-xl text-lg hover:text-white transition-all duration-100 delay-200 cursor-pointer'>About</a>
        <a href="#" className='design-txt md:text-xl text-lg hover:text-white transition-all duration-100 delay-200 cursor-pointer'>Services</a>
        <a href="#" className='design-txt md:text-xl text-lg hover:text-white transition-all duration-100 delay-200 cursor-pointer'>Projets</a>
      </div>
      <div className="flex gap-x-6 justify-center items-center">
          <img className="cursor-pointer hover:bg-white" src={fb} alt="facebook icon"/>
          <img className="cursor-pointer hover:bg-white" src={ig} alt="instagram icon"/>
          <img className="cursor-pointer hover:bg-white" src={twt} alt="twt icon"/>
          <img className="cursor-pointer hover:bg-white" src={pin} alt="pin icon"/>
      </div>
    </footer>
  )
}

export default Footer;