import {useEffect, useRef, useState} from 'react'
import {Stack, Button} from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import BasicImage from './basicImage';

function ImageGallery({imageSrcs}) {
  const [isScrollable, setIsScrollable] = useState(false);
  const gallery = useRef()
  const scrollLeft = () => {
    gallery.current.scrollLeft -= 300;
  }

  const scrollRight = () => {
    gallery.current.scrollLeft += 300;
  }

     


  useEffect(()=>{
    setIsScrollable(gallery?.current?.scrollWidth > gallery?.current?.clientWidth);
  }, [])

  return (
    <div className="image-gallery">
      {isScrollable && 
        <Button className='image-galery-nav-button left' variant="secondary" onClick={scrollLeft}><ChevronLeft size={28}/></Button>      
      }
      <Stack direction="horizontal" ref={gallery} className="image-gallery-content">          
        {imageSrcs.map((imageSrc,  index) => { 
          return <BasicImage imageSrc={imageSrc} objectFit="cover" key={index}/>         
        })}    
      </Stack>
      {isScrollable && 
        <Button className='image-galery-nav-button right' variant="secondary" onClick={scrollRight}><ChevronRight size={28}/></Button>
      }
      </div>
  );
}

export default ImageGallery;