
import {Modal} from 'react-bootstrap';
import Image from 'next/image'

function ImageModal({imageSrc, title, handleClose}) {  
    
    return (
       <>  
            <Modal centered show={true} onHide={handleClose}>
                <Modal.Header className="py-3 border-bottom-0" closeButton>
                <Modal.Title as="h5">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center justify-content-center">
                <Image
                    alt={title}
                    src={imageSrc}  
                    placeholder="blur"
                    blurDataURL="/blur-image-png"   
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