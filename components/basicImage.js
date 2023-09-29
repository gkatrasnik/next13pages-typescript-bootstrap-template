// components/layout.js
import { useState } from "react";
import ImageModal from "./imageModal";
import Image from "next/image";

function BasicImage({imageSrc}) {
    const [imageModalShowed, setImageModalShowed] = useState(false);

    const closeImageModal = () => {
        setImageModalShowed(false);
    }
    
    const showImageModal = () => {
        setImageModalShowed(true);
    }

    return (
        <>
            {imageModalShowed && <ImageModal imageSrc={imageSrc} handleClose={closeImageModal}/>}

            <Image
                alt={imageSrc}
                src={imageSrc}      
                height={200}
                width={200}        
                placeholder="blur"
                blurDataURL="/blur-image-png"   
                style={{
                    margin: "1rem",
                    borderRadius: "inherit",   
                    objectFit: "contain",    
                    cursor: "pointer"         
                }}      
                onClick={showImageModal}          
            />
        </>   
    )
}

export default BasicImage;