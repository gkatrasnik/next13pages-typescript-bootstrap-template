import { Card, Button} from 'react-bootstrap';

export default function GeneralCard({title, subtitle, mainText, bullets, bottomText, buttonText}) {
  return (
    <Card className="h-100 shadow-sm">
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
                    return <li key={bullet}>- {bullet}</li>
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
                <Button variant="primary">{buttonText}</Button>
            </div>
        }
        
        </Card.Body>
    </Card>
  )
}