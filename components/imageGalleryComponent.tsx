import { useState, useEffect } from 'react'
import ImageGallery from "./imageGallery"
import ImageGalleryCarousel from "./imageGalleryCarousel"

interface ImageGalleryContainerProps {
    imageSrcs: string[]    
}

const ImageGalleryContainer = (props: ImageGalleryContainerProps) => {
    const [isSmallOrMediumScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        setIsSmallScreen(window.innerWidth <= 768);

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
  }, []);

    return ( 
        <>       
            {isSmallOrMediumScreen ? 
                <ImageGalleryCarousel 
                    imageSrcs={props.imageSrcs}
                />
                :               
                <ImageGallery 
                    imageSrcs={props.imageSrcs}
                />     
            }        
        </>          
    )
}

export default ImageGalleryContainer;