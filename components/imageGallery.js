import {useRef} from 'react'
import {Stack, Button} from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import BasicImage from './basicImage';

function ImageGallery({imageSrcs}) {
  const gallery = useRef()
  const scrollLeft = () => {
    gallery.current.scrollLeft -= 232;
  }

  const scrollRight = () => {
    gallery.current.scrollLeft += 232;
  }

  return (
    <div className="image-gallery"  >
      <Button className='image-galery-nav-button left' variant="secondary" onClick={scrollLeft}><ChevronLeft/></Button>      
      <Stack direction="horizontal" ref={gallery} className="image-gallery-content">          
        {imageSrcs.map(imageSrc => { 
          return <BasicImage imageSrc={imageSrc}/>         
        })}    
      </Stack>
      <Button className='image-galery-nav-button right' variant="secondary" onClick={scrollRight}><ChevronRight/></Button>
    </div>
  );
}

export default ImageGallery;