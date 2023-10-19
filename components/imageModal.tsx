import {Modal} from 'react-bootstrap';
import Image from 'next/image'

interface ImageModalProps {
    imageSrc: string,
    title?: string,
    handleClose: () => void
}

const ImageModal = ({imageSrc, title, handleClose}: ImageModalProps) => {  
    
    return (
       <>  
            <Modal centered show={true} onHide={handleClose}>
                <Modal.Header className="py-3 border-bottom-0" closeButton>
                <Modal.Title as="h5">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center justify-content-center">
                <Image
                    alt={title || imageSrc}
                    src={imageSrc}  
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    height={500}
                    width={500}          
                    style={{
                        margin: "auto",
                        borderRadius: "inherit",   
                        objectFit: "contain",    
                        maxWidth: "100%",
                        maxHeight: "100%"         
                    }}                
                />   
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImageModal;