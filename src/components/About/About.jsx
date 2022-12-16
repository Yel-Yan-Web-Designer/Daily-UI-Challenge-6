import React from 'react';
import './About.css'
import AboutItems from './AboutItems';

const About = () => {
  
  return (
    <div className='about grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center z-10 bg-white'>
        <AboutItems/>
    </div>
  )
}

export default About;