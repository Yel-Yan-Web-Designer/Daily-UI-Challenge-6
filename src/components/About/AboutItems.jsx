import React from 'react';
import './About.css';
import Mobileegg from '../../images/mobile/image-transform.jpg';
import Desktopegg from '../../images/desktop/image-transform.jpg';
import MobileCup from '../../images/mobile/image-stand-out.jpg';
import Desktopcup from '../../images/desktop/image-stand-out.jpg';
import MobileBerry from '../../images/mobile/image-graphic-design.jpg';
import DesktopBerry from '../../images/desktop/image-graphic-design.jpg';
import MobileOrange from '../../images/mobile/image-photography.jpg';
import DesktopOrange from '../../images/desktop/image-photography.jpg';

const AboutItems = () => {
    const [windowSize, setWindowSize]= React.useState("");


    function changeImageResize () {
        setWindowSize({width : window.innerWidth, height : window.innerHeight});
    }
    // window is not from react that's hwy it requires useEffect
    React.useEffect(()=> {

        window.addEventListener("resize", changeImageResize)

        return () => {
            window.removeEventListener("resize", changeImageResize)
        }
    }, [])
  return (
    <>
        <picture className='egg'>
            <source media="(min-width: 768px)" srcSet={Desktopegg}/>
            <img src={Mobileegg} alt='white egg'/>
        </picture>
        <div className="flex flex-col gap-y-5 md:px-16 px-7 py-20 text-center md:text-left egg-content">
            <h1 className='text-bolder text-4xl fraun desa-blue-txt'>Transform your brand</h1>
            <p>
                We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling 
                visuals that do most of the marketing for you.
            </p>
            <button className='btn self-center md:self-start inline-block relative after:content-[""] after:block after:w-full after:bg-orange-300 after:h-1 hover:after:absolute hover:after:h-1 hover:after:rounded hover:after:bg-orange-600 cursor-pointer font-bold '>Learn More</button>
        </div>
        <picture className='cup'>
            <source media="(min-width: 768px)" srcSet={Desktopcup}/>
            <img src={MobileCup} alt='white egg'/>
        </picture>
        <div className="flex flex-col gap-y-5 md:px-16 px-7 py-20 text-center md:text-left cup-content">
            <h1 className='text-bolder text-4xl fraun desa-blue-txt'>Stand out to the right audience</h1>
            <p>
                Using a collaborative formula of designers, researchers,photographers,videographers,and copywriters.We'll build and extend your brand in digital places.
            </p>
            <button className='btn self-center md:self-start inline-block relative after:content-[""] after:block after:w-full after:bg-red-300 after:h-1 hover:after:absolute hover:after:h-1 hover:after:rounded hover:after:bg-red-400 cursor-pointer font-bold '>Learn More</button>
        </div>
        <div className="relative graphic">
            {
                windowSize.width < 768 ?
                <img src={MobileBerry} alt="berry fruit"/>
                :
                <img src={DesktopBerry} alt="berry fruit"/>
            }

            <div className="z-10 absolute top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 text-center design-txt">
                <h1 className='text-extrabold text-4xl fraun design-txt mb-6'>Graphic Design</h1>
                <p className='font-semibold design-txt'>
                    Great design makes you memorable.We deliver artwork that underscores your brand message and captures potential client's attention
                </p>
            </div>
        </div>
        <div className="relative photography">
            {
                windowSize.width < 768 ?
                <img src={MobileOrange} alt="orange fruit"/>
                :
                <img src={DesktopOrange} alt="orange fruit"/>
            }

            <div className="z-10 absolute top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 text-center design-txt">
                <h1 className='text-extrabold text-4xl fraun design-txt mb-6'>Photography</h1>
                <p className='font-semibold design-txt'>
                    Increase your the crediability by getting the most stunning,high-quality photos that improve your business image. 
                </p>
            </div>
        </div>
    </>
  )
}

export default AboutItems;
