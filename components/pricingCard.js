// components/layout.js
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

export default function PricingCard({title, subtitle, mainText, bullets, buttonText}) {
  return (
    <Card className="h-100">
        <Card.Body className="d-flex flex-column justify-content-between">
        <div>
            <Card.Title >{title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{subtitle}</Card.Subtitle>
            <Card.Text>
            {mainText}
            </Card.Text>
            <ul className="list-unstyled">
                {bullets.map(bullet => {
                    return <li key={bullet}>- {bullet}</li>
                })}
            </ul>
        </div>
        <div className='d-flex flex-column'>
            <Button variant="primary">{buttonText}</Button>
        </div>
        </Card.Body>
    </Card>
  )
}