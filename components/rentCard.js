import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useTranslations} from 'next-intl';
import Image from 'next/image'

function RentCard({title, bullets, price, imageSrc, actionCallback}) {
    const t = useTranslations('RentCard');

    return (
        <Card style={{ width: '300px' }}>
        <Image
            alt={imageSrc}
            src={imageSrc}      
            height={200}
            width={250}          
            style={{
                margin: "auto",
                borderRadius: "inherit",   
                objectFit: "contain"             
            }}                
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
            <div className='d-flex flex-column'>
                <Button variant="secondary" className="text-uppercase" onClick={actionCallback} >{t("sendInquiry")}</Button>
            </div>
        </Card.Body>
        </Card>
    );
}

export default RentCard;