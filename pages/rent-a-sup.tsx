import Head from 'next/head'
import {useTranslations} from 'next-intl';
import {Container, Row, Col} from 'react-bootstrap'
import RentCard from '../components/rentCard';
import { GetStaticProps } from 'next';
import {FC} from 'react';

interface RentASupProps {
  messages: Record<string, string>;
  rentaSups: RentSups;
}

const RentASup: FC<RentASupProps> = (props) => {
    const t = useTranslations('RentASup');

    return (
    <>
      <Head>
        <title>{t('rentASupBled')}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column ">
        <h1 className=' text-center fw-bold mb-5'>{t("rentASup")}</h1>
        <Row>
          <Col>
            <div className='mb-3'>
              <div className='mb-5'>
                <h2 className='fw-bold mb-4'>{t("exploreBledSup")}</h2>
                <p>{t("exploreBledSupText")}</p>
              </div>
              <p className='fw-bold text-primary h5'>{t("priceIncludes")}</p>
              <ul>
                <li>{t("freeParking")}</li>
                <li>{t("lifeVest")}</li>           
              </ul>  
              <div>
                <p className='fw-bold text-primary h5'>{t("Accessories")}</p>
                <ul>
                  <li>{t("waterproofBag")}</li>
                  <li>{t("waterproofPhoneCase")}</li>
                </ul>        
              </div>         
            </div>
          </Col>
        </Row>
        
                 
        <Row className='mb-5'>
            {props?.rentaSups?.sups?.map((sup, index) => {
                return (
                  <Col key={index} className='d-flex justify-content-center my-3'>
                    <RentCard 
                      title={sup.title}
                      price={sup.price}
                      imageSrc={sup.imageSrc}
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
      rentaSups: (await import(`../assets/renta-sups-${context.locale}.json`)).default
    }
  };
}

export default RentASup;
