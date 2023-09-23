// components/layout.js
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export default function PricingCard(props) {
  return (
    <Card className="h-100">
        <Card.Body className="d-flex flex-column justify-content-between">
        <div>
            <Card.Title className={montserrat.className}>{props.title}</Card.Title>
            <Card.Subtitle className={montserrat.className + ' mb-2 text-muted'}>{props.subtitle}</Card.Subtitle>
            <Card.Text>
            {props.mainText}
            </Card.Text>
            <ul className="list-unstyled">
                {props.bullets.map(bullet => {
                    return <li key={bullet}>- {bullet}</li>
                })}
            </ul>
        </div>
        <div className='d-flex flex-column'>
            <Button variant="primary">{props.buttonText}</Button>
        </div>
        </Card.Body>
    </Card>
  )
}