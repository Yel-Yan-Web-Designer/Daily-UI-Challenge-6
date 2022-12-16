import React from 'react';
import MobileCone from '../../images/mobile/image-gallery-cone.jpg';
import DesktopCone from '../../images/desktop/image-gallery-cone.jpg';
import DesktopMilk from '../../images/desktop/image-gallery-milkbottles.jpg';
import MobileMilk from '../../images/mobile/image-gallery-milkbottles.jpg';
import DesktopOrange from '../../images/desktop/image-gallery-orange.jpg';
import MobileOrange from '../../images/mobile/image-gallery-orange.jpg';
import DesktopCubes from '../../images/desktop/image-gallery-sugarcubes.jpg';
import MobileCubes from '../../images/mobile/image-gallery-sugar-cubes.jpg';


const Gallery = () => {
  const [windowSize, setWindowSize]= React.useState("");


  function changeImageResize () {
      setWindowSize({width : window.innerWidth, height : window.innerHeight});
  }
  // window is not from react that's hwy it requires useEffect
  React.useEffect(()=> {

      window.addEventListener("resize", changeImageResize)

      return () => {
          window.removeEventListener("resize", changeImageResize); // clean up useEffect
      }
  }, []);

  return (
    <>
      {
        windowSize.width < 768 ?
        <div className='grid grid-cols-2'>
          <img src={MobileMilk}/>
          <img src={MobileOrange}/>
          <img src={MobileCone}/>
          <img src={MobileCubes}/>
      </div>
        :
        <div className='grid md:grid-cols-4 lg:grid-cols-4'>
            <img src={DesktopMilk}/>
            <img src={DesktopOrange}/>
            <img src={DesktopCone}/>
            <img src={DesktopCubes}/>
        </div>
      }
    </>
  )
}

export default Gallery;
