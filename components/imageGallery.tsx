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
      gallery.current.scrollLeft -= 232;
    }
  }

  const scrollRight = () => {
    if (gallery.current) {
      gallery.current.scrollLeft += 232;
    }
  }

  useEffect(()=>{
    setIsScrollable(!!(gallery.current && (gallery.current.scrollWidth > gallery.current.clientWidth)));
  }, [])

  return (
    <div className="image-gallery">
      {isScrollable && 
        <Button aria-label="previous image" className='image-gallery-nav-button left text-white px-1' variant="secondary" onClick={scrollLeft}>
          <ChevronLeft size={56}/>
        </Button>      
      }
      <Stack direction="horizontal" ref={gallery} className="image-gallery-content">          
        {imageSrcs.map((imageSrc,  index) => { 
          return (
            <div className="image-gallery-image">
              <BasicImage imageSrc={imageSrc} objectFit="cover" key={index}/> 
            </div>
          )        
        })}    
      </Stack>
      {isScrollable && 
        <Button aria-label="next image" className='image-gallery-nav-button right text-white px-1' variant="secondary" onClick={scrollRight}>
          <ChevronRight size={56}/>
        </Button>
      }
    </div>
  );
}

export default ImageGallery;