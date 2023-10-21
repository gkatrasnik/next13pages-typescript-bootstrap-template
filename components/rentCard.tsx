import {useState} from 'react'
import {Button, Card} from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import FormModal from '../components/formModal'
import ImageModal from '../components/imageModal'
import { AspectRatio } from 'react-bootstrap-icons';

type RentCardProps = {
    title: string;
    bullets?: string[];
    price: string;
    imageSrc: string;
};

const RentCard = ({title, bullets, price, imageSrc}: RentCardProps): JSX.Element => {
    const [formModalShowed, setFormModalShowed] = useState(false);
    const [imageModalShowed, setImageModalShowed] = useState(false);
    
    const t = useTranslations('RentCard');


    const closeFormModal = (): void => {
    setFormModalShowed(false);
    }

    const showFormModal = (): void => {
    setFormModalShowed(true);
    }

    const closeImageModal = (): void => {
        setImageModalShowed(false);
    }
    
    const showImageModal = (): void => {
        setImageModalShowed(true);
    }

    return (
        <>
            {formModalShowed && <FormModal  formIsForRent handleClose={closeFormModal}/>}
            {imageModalShowed && <ImageModal imageSrc={imageSrc} title={title} handleClose={closeImageModal}/>}

            <Card className='rent-card shadow'>
                <div className='rent-image-container' onClick={showImageModal} >
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
                        }}      
                    />   
                    <AspectRatio size={20} className="rent-image-zoom-in"/>
                </div>
                
                <Card.Body>
                    <Card.Title>{title}</Card.Title>    
                    {bullets &&
                        <ul className="list-unstyled">
                            {bullets.map(bullet => {
                                return <li key={bullet}>{bullet}</li>
                            })}
                        </ul>
                    }       
                    
                    <Card.Text>
                        {price}
                    </Card.Text>
                    
                </Card.Body>
                <div className='d-flex flex-column m-3'>
                    <Button variant="secondary" onClick={showFormModal} >{t("sendInquiry")}</Button>
                </div>
            </Card>
        </>
    );
}

export default RentCard;