import {useState} from 'react';
import Head from 'next/head';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import FormModal from '../components/formModal';
import Image from 'next/image';
import { GetStaticProps } from 'next';

const CyclingTrips = (): JSX.Element => {
    const [formModalShowed, setFormModalShowed] = useState<boolean>(false);
    const t = useTranslations('CyclingTrips');

    const closeFormModal = (): void => {
      setFormModalShowed(false);
    }
  
    const showFormModal = (): void => {
    setFormModalShowed(true);
    }

    return (
    <>
      {formModalShowed && <FormModal handleClose={closeFormModal}/>}
      
      <Head>
        <title>{t("cyclingTripsBled")}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column cycling-trips">
        <h1 className='text-center fw-bold mb-5'>{t("cyclingTrips")}</h1>
        <Row >
          <Col md={6} className=" d-flex justify-content-center mb-4 overflow-hidden"> 
              <Image 
                  src="/cycling-trips-images/cycling-trips.jpg"
                  alt="cycling trips"
                  height={300}
                  width={400}                                                                                    
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                  priority    
                  className='image-border-radius'    
                  style={{                 
                    objectFit:"cover"                
                  }}                       
              />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center mb-4 overflow-hidden">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='text-wrapper mb-4'>
                <p className="h5">{t("weOffer")}</p>
                <p className="h5">{t("sendInquiryMsg")}</p>
              </div>
              
            </div>
            
            <div className='d-flex justify-content-center'>
              <Button size="lg" variant="secondary" className="text-uppercase" onClick={showFormModal}>{t("sendInquiry")}</Button>
            </div>
          </Col>
        </Row>               
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context)  => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}

export default CyclingTrips;