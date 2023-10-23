import Head from 'next/head'
import {Card, Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import GoogleMap from '../components/googleMap';
import { PinMap, Telephone, Envelope, Clock } from 'react-bootstrap-icons';
import { GetStaticProps } from 'next';
import { fetchGooglePlacesData } from '../service/googlePlacesService';
import { FC } from 'react';

interface AboutProps {
  messages: Record<string, string>;
  placesData: GooglePlaceDetails;
}



const About: FC<AboutProps> = (props) => {
  const t = useTranslations('Contact');  

  const periodsToWeekdayText = (periods: GoogleOpeningHoursPeriod[]): string[] => {
    
    //sunday must always be the first day of the week as per Google Places API
    const daysOfWeek: string[] = [t("sunday"), t("monday"), t("tuesday"), t("wednesday"), t("thursday"), t("friday"), t("saturday")];
    
    // Initial empty array for all 7 days
    const result: string[] = new Array(7).fill("");
  
    // Loop through the periods and fill in the result array
    periods.forEach(period => {
      const day = period.open.day;
      const openTime = `${period.open.time.substring(0, 2)}:${period.open.time.substring(2)}`;
      const closeTime = `${period.close.time.substring(0, 2)}:${period.close.time.substring(2)}`;
      result[day] = `${daysOfWeek[day]}: ${openTime} – ${closeTime}`;
    });
  
    // Fill in "Closed" for days with no open/close time
    for (let i = 0; i < 7; i++) {
      if (!result[i]) result[i] = `${daysOfWeek[i]}: ${t("closed")}`;
    }
  
    return result;
  }

  const weekdayText = periodsToWeekdayText(props.placesData.opening_hours.periods);
  
  return (
    <>
      <Head>
        <title>{t("contactUsTitle")}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column contact-cards">
        <Row>
          <Col sm={12}>
            <h1 className='fw-bold mb-4'>{t("contactUsH1")}</h1>
            <p>{t("description")}</p>
          </Col>
        </Row>
        <Row >  
          <Col md={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column align-items-center'>
                <Clock size={48} className='mb-3'/>
                <Card.Title className='text-center'>{t("schedule")}</Card.Title>  
                <div>
                  {weekdayText.map((day, index) => ( 
                    <p key={index}>{day}</p> 
                  ))}                
                </div>     
              </Card.Body>
            </Card>
          </Col>          
          <Col md={3} className="d-flex justify-content-center mb-4">
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
          <Col md={3} className="d-flex justify-content-center mb-4">
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
          <Col md={3} className="d-flex justify-content-center mb-4">
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

export const getStaticProps: GetStaticProps = async (context)  => {
  const placesData = await fetchGooglePlacesData(); // You'd have to define the fetchData function

  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
      placesData: placesData
    },
    revalidate: parseInt(process.env.GOOGLE_PLACES_DATA_REVALIDATE!) // Re-fetch the data every 24 hours (86400 seconds) 
  };
}

export default About; 