import {useEffect, useRef, useState} from 'react'
import {Stack, Button} from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import BasicImage from './basicImage';

interface ImageGalleryProps {
    imageSrcs: string[]
}

const ImageGallery = ({imageSrcs}: ImageGalleryProps) => {
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const gallery = useRef<HTMLSpanElement>(null);
  const scrollLeft = () => {
    if (gallery.current) {
      gallery.current.scrollLeft -= 300;
    }
  }

  const scrollRight = () => {
    if (gallery.current) {
      gallery.current.scrollLeft += 300;
    }
  }

  useEffect(()=>{
    setIsScrollable(!!(gallery.current && (gallery.current.scrollWidth > gallery.current.clientWidth)));
  }, [])

  return (
    <div className="image-gallery">
      {isScrollable && 
        <Button aria-label="previous image" className='image-gallery-nav-button left text-white' variant="secondary" onClick={scrollLeft}><ChevronLeft size={28}/></Button>      
      }
      <Stack direction="horizontal" ref={gallery} className="image-gallery-content">          
        {imageSrcs.map((imageSrc,  index) => { 
          return <BasicImage imageSrc={imageSrc} objectFit="cover" key={index}/>         
        })}    
      </Stack>
      {isScrollable && 
        <Button aria-label="next image" className='image-gallery-nav-button right text-white' variant="secondary" onClick={scrollRight}><ChevronRight size={28}/></Button>
      }
    </div>
  );
}

export default ImageGallery;