import Head from 'next/head'
import {Card, Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import GoogleMap from '../components/googleMap';
import { PinMap, Telephone, Envelope, Clock } from 'react-bootstrap-icons';

export default function About() {
    const t = useTranslations('Contact');
    
    return (
    <>
      <Head>
        <title>{t("contactUs")}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column contact-cards">
        <h1 className='text-center fw-bold mb-5'>{t("contact")}</h1>
        <Row >            
          <Col s={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column align-items-center'>
                <PinMap size={48} className='mb-3'/>     
                <Card.Title className='text-center'>{t("address")}</Card.Title>     
                <div>
                  <p className='h6'>Cesta Svobode 22, 4260</p>              
                  <p>Bled, Slovenija</p>  
                </div> 
              </Card.Body>
            </Card>
          </Col>
          <Col s={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column align-items-center'>
              <Telephone size={48} className='mb-3'/>               
                <Card.Title className='text-center'>{t("phone")}</Card.Title>    
                <div>
                  <div className="fw-bold ">
                    <a href="tel: +386 (0)40 219 415" className='footer-link'>+386 (0)40 219 415</a> 
                  </div>  
                </div> 
              </Card.Body>
            </Card>
          </Col>
          <Col s={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column align-items-center'>
              <Envelope size={48} className='mb-3'/>
                <Card.Title className='text-center'>{t("email")}</Card.Title> 
                <div>                    
                  <div className="fw-bold">
                    <a href="mailto:info@ab-bike.si" className='footer-link'>info@ab-bike.si</a>
                  </div> 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col s={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column align-items-center'>
                <Clock size={48} className='mb-3'/>
                <Card.Title className='text-center'>{t("schedule")}</Card.Title>  
                <div>
                  <p className='fw-bold h6'>{t("weekdays")}</p> 
                  <p className='mb-0'>- 9.00-12-00</p> 
                  <p>- 14-00-18.00   </p>

                  <p className='fw-bold h6'>{t("weekends")}</p> 
                  <p>- {t("byAppointment")}</p>  
                </div>     
              </Card.Body>
            </Card>
          </Col>
        </Row>         
        <Row className='my-5'>
          <Col className="mb-4">
            <GoogleMap/>
          </Col>
        </Row>     
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}

