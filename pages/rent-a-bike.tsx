import Head from 'next/head'
import {useTranslations} from 'next-intl';
import { Container, Row, Col } from 'react-bootstrap'
import RentCard from '../components/rentCard'
import { GetStaticProps } from 'next';

interface RentABikeProps {
  messages: Record<string, string>;
  rentaBikes: RentItems;
} 

const RentABike = (props: RentABikeProps) => {
  const t = useTranslations('RentABike');

  return (
    <>
      <Head>
        <title>{t('rentABikeTitle')}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5">
        <Row>
          <Col>
            <div className='mb-5'>
              <h1 className='fw-bold mb-4'>{t("rentABikeH1")}</h1>
              <p>{t("exploreBledText")}</p>
            </div>
            <div className='mb-5'>
              <p className='fw-bold text-primary h5'>{t("priceIncludes")}</p>
              <ul>
                <li>{t("parking")}</li>
                <li>{t("helmet")}</li>
                <li>{t("lock")}</li>
                <li>{t("suggestions")}</li>
                <li>{t("delivery")}</li>
              </ul>        
            </div>
          </Col>
        </Row>       

        <Row className='mb-5'>
          <h2 className='text-center'>{t("eBikes")}</h2>
            {props?.rentaBikes?.eBikes?.map((rentItem, index) => {
                return (
                  <Col key={index} md={6} lg={4} className='d-flex justify-content-center my-3'>
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
          {props?.rentaBikes?.regularBikes?.map((rentItem, index) => {
              return (
                <Col key={index} md={6} lg={4}  className='d-flex justify-content-center my-3'>
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
            {props?.rentaBikes?.other?.map((rentItem, index) => {
                return (
                  <Col key={index} md={6} lg={4} className='d-flex justify-content-center my-3'>
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

export const getStaticProps: GetStaticProps = async (context)  => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
      rentaBikes: (await import(`../assets/renta-bikes-${context.locale}.json`)).default
    }
  };
}

export default RentABike;
