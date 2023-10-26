import { FC } from "react"
import BasicImage from "./basicImage"
import { useState, } from 'react'
import {Carousel} from 'react-bootstrap';
interface ImageGalleryCarouselProps {
    imageSrcs: string[]    
}

const ImageGalleryCarousel: FC<ImageGalleryCarouselProps> = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };

    return (        
        <Carousel className="image-gallery-carousel" activeIndex={index} onSelect={handleSelect} variant="dark">
            {props.imageSrcs.map((imageSrc, index) => {
                return (                                
                    <Carousel.Item key={index} className="image-gallery-carousel-item">  
                        <div className="image-gallery-carousel-image-container">
                            <BasicImage imageSrc={imageSrc} objectFit="cover" width={200} height={200}/>                         
                        </div>                      
                    </Carousel.Item>
                )
            })}  
        </Carousel>        
    )
}

export default ImageGalleryCarousel;