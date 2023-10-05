import {useState} from 'react'
import {Button, Card} from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import FormModal from '../components/formModal'
import ImageModal from '../components/imageModal'

function RentCard({title, bullets, price, imageSrc}) {
    const [formModalShowed, setFormModalShowed] = useState(false);
    const [imageModalShowed, setImageModalShowed] = useState(false);
    
    const t = useTranslations('RentCard');


    const closeFormModal = () => {
    setFormModalShowed(false);
    }

    const showFormModal = () => {
    setFormModalShowed(true);
    }

    const closeImageModal = () => {
        setImageModalShowed(false);
    }
    
    const showImageModal = () => {
        setImageModalShowed(true);
    }

    return (
        <>
            {formModalShowed && <FormModal  formIsForRent handleClose={closeFormModal}/>}
            {imageModalShowed && <ImageModal imageSrc={imageSrc} title={title} handleClose={closeImageModal}/>}

            <Card className='rent-card'>
                <Image
                    alt={title}
                    src={imageSrc}      
                    height={200}
                    width={250}        
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    style={{
                        margin: "auto",
                        borderRadius: "inherit",   
                        objectFit: "contain",    
                        cursor: "pointer"         
                    }}      
                    onClick={showImageModal}          
                />   
                <Card.Body>
                    <Card.Title>{title}</Card.Title>            
                    <ul className="list-unstyled">
                        {bullets.map(bullet => {
                            return <li key={bullet}>{bullet}</li>
                        })}
                    </ul>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    
                </Card.Body>
                <div className='d-flex flex-column m-3'>
                    <Button variant="secondary" className="text-uppercase" onClick={showFormModal} >{t("sendInquiry")}</Button>
                </div>
            </Card>
        </>
    );
}

export default RentCard;