import { Card, Button} from 'react-bootstrap';
import Image from 'next/image';

interface GeneralCardProps {
    title: string;
    subtitle?: string;
    mainText?: string;
    bullets?: string[];
    bottomText?: string;
    buttonText?: string;
    onCardClick?: () => void;
    imageSrc?: string;
}

const GeneralCard = ({title, subtitle, mainText, bullets, bottomText, buttonText, onCardClick, imageSrc}: GeneralCardProps): JSX.Element => {
  return (
    <Card className="h-100 general-card shadow" onClick={onCardClick}>
        {imageSrc &&
            <Image
                alt={title}
                src={imageSrc}      
                width={250}
                height={150}   
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                style={{
                    margin: "auto",   
                    objectFit: "cover",           
                }}             
            />               
        }
        
        <Card.Body className="d-flex flex-column justify-content-between">
        <div>
            <Card.Title >{title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{subtitle}</Card.Subtitle>
            <Card.Text>
            {mainText}
            </Card.Text>
            {bullets &&
                <ul className="list-unstyled">
                {bullets.map(bullet => {
                    return <li key={bullet}>{bullet}</li>
                })}
            </ul>
            }
            
        </div>
        {bottomText && 
        <div className='d-flex flex-column'>
            <div className='h5 mb-2 text-center'>{bottomText}</div>
        </div>
        }

        {buttonText && 
            <div className='d-flex flex-column'>
                <Button className="text-uppercase" variant="primary">{buttonText}</Button>
            </div>
        }
        
        </Card.Body>
    </Card>
  )
}

export default GeneralCard;