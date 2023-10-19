import { useState } from "react";
import ImageModal from "./imageModal";
import Image from "next/image";
import { AspectRatio } from "react-bootstrap-icons";

interface BasicImageProps {
    imageSrc: string,
    objectFit: "contain" | "cover" | "fill" | "none" | "scale-down"
}   

const BasicImage = ({imageSrc, objectFit}: BasicImageProps) => {
    const [imageModalShowed, setImageModalShowed] = useState(false);

    const closeImageModal = (): void => {
        setImageModalShowed(false);
    }
    
    const showImageModal = (): void => {
        setImageModalShowed(true);
    }

    return (
        <>
            {imageModalShowed && <ImageModal imageSrc={imageSrc} handleClose={closeImageModal}/>}
            <div className="basic-image-container">
                <Image
                    alt={imageSrc}
                    src={imageSrc}      
                    height={200}
                    width={200}        
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    style={{                        
                        borderRadius: "inherit",   
                        objectFit: objectFit,    
                        cursor: "pointer"         
                    }}      
                    onClick={showImageModal}          
                />
                <AspectRatio size={20} className="basic-image-zoom-in"/>
            </div>
        </>   
    )
}

export default BasicImage;