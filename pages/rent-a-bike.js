import Head from 'next/head'
import {useTranslations} from 'next-intl';
import { Container, Row, Col } from 'react-bootstrap'
import RentCard from '../components/rentCard'

export default function RentABike(props) {
  const t = useTranslations('RentABike');

  return (
    <>
      <Head>
        <title>{t("rentABike")}</title>
      </Head>
      <Container className="my-5">
        <h1 className=' text-center mb-5'>{t("rentABike")}</h1>
        <div className='mb-5'>
          <h5>{t("exploreBled")}</h5>
          <p>{t("exploreBledText")}</p>
        </div>
        <div className='mb-5'>
          <h5>{t("priceIncludes")}</h5>
          <ul>
            <li>{t("parking")}</li>
            <li>{t("helmet")}</li>
            <li>{t("lock")}</li>
            <li>{t("suggestions")}</li>
            <li>{t("delivery")}</li>
          </ul>        
        </div>

        <Row className='mb-5'>
          <h2 className='text-center'>{t("eBikes")}</h2>
            {props?.rentItems?.eBikes?.map((rentItem, index) => {
                return (
                  <Col key={index} sm={4} className='d-flex justify-content-center my-3'>
                    <RentCard 
                      title={rentItem.title}
                      bullets={rentItem.bullets}
                      price={rentItem.price}
                      imageSrc={rentItem.imageSrc}
                    />
                  </Col>                      
                );              
              }
            )}    
        </Row>
        <Row className='mb-5'>
          <h2 className='text-center'>{t("regularBikes")}</h2>
          {props?.rentItems?.regularBikes?.map((rentItem, index) => {
              return (
                <Col key={index} sm={4} className='d-flex justify-content-center my-3'>
                  <RentCard 
                    title={rentItem.title}
                    bullets={rentItem.bullets}
                    price={rentItem.price}
                    imageSrc={rentItem.imageSrc}
                  />
                </Col>
              );              
            }
          )}          
        </Row>
        <Row className='mb-5'>
          <h2 className='text-center'>{t("accessories")}</h2>
            {props?.rentItems?.other?.map((rentItem, index) => {
                return (
                  <Col key={index} sm={4} className='d-flex justify-content-center my-3'>
                      <RentCard 
                        title={rentItem.title}
                        bullets={rentItem.bullets}
                        price={rentItem.price}
                        imageSrc={rentItem.imageSrc}
                      />
                  </Col>
                );              
              }
            )}    
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
      rentItems: (await import(`../assets/rent-items-${context.locale}.json`)).default
    }
  };
}

