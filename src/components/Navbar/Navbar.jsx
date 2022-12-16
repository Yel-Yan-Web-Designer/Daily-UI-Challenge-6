import React from 'react';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';



const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const [windowSize, setWindowSize]= React.useState({width : window.innerWidth, height : window.innerHeight});


  function changeImageResize () {
      setWindowSize({width : window.innerWidth, height : window.innerHeight});
  }
  // window is not from react that's hwy it requires useEffect
  React.useEffect(()=> {

      window.addEventListener("resize", changeImageResize)

      return () => {
          window.removeEventListener("resize", changeImageResize)
      }
  }, []);


 
    
      
  // toggle nav menu
  function toggleMenu () {
    setToggle(prevState => !prevState);
  }

  return (
    <nav className='flex justify-between items-center p-5 bg-transparent relative md:px-20'>


      <div className="logo-container z-10">
        <img src = {logo} alt="logo sunny side"/>
      </div>

    {
      toggle && 
      <div className="nav-container absolute top-24 w-5/6 bg-white mx-auto left-10 z-10 transition-all delay-300 md:hidden">
        <ul className='nav-list flex flex-col justify-center items-center gap-10 p-5 relative' >
          <li><a className='text-gray-600 text-lg hover:text-stone-500'>About</a></li>
          <li><a className='text-gray-600 text-lg hover:text-stone-500'>Services</a></li>
          <li><a className='text-gray-600 text-lg hover:text-stone-500'>Projects</a></li>
          <li><a className='text-gray-600 text-lg active cursor-pointer hover:text-stone-500'>Contact</a></li>
        </ul>
      </div>
    }

    {
      windowSize.width > 768 && 
      <ul className='flex justify-center items-center gap-10 p-5 relative' >
        <li><a className='text-white font-bold text-lg cursor-pointer hover:text-stone-500 transition-all duration-300 delay-200'>About</a></li>
        <li><a className='text-white font-bold text-lg cursor-pointer hover:text-stone-500 transition-all duration-300 delay-200'>Services</a></li>
        <li><a className='text-white font-bold text-lg cursor-pointer hover:text-stone-500 transition-all duration-300 delay-200'>Projects</a></li>
        <li><a className='text-white font-bold text-lg active cursor-pointer transition-all duration-300 delay-200'>Contact</a></li>
      </ul>
    }


      <div className="toggle-container z-10 cursor-pointer md:hidden" onClick={toggleMenu}>
        <img src={hamburger} alt = "hamburger button"/>
      </div>

    </nav>
  )
}

export default Navbar;