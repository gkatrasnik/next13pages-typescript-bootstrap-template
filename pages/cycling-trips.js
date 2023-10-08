import {useState} from 'react';
import Head from 'next/head';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import FormModal from '../components/formModal';
import Image from 'next/image';

export default function CyclingTrips() {
    const [formModalShowed, setFormModalShowed] = useState(false);
    const t = useTranslations('CyclingTrips');

    const closeFormModal = () => {
      setFormModalShowed(false);
    }
  
    const showFormModal = () => {
    setFormModalShowed(true);
    }

    return (
    <>
      {formModalShowed && <FormModal handleClose={closeFormModal}/>}

      <Head>
        <title>{t("cyclingTrips")}</title>
      </Head>
      <Container className="my-5 d-flex flex-column cycling-trips">
        <h1 className='text-center mb-5'>{t("cyclingTrips")}</h1>
        <Row >
          <Col md={6} className=" d-flex justify-content-center mb-4"> 
            <div className='overflow-hidden image-border-radius'>           
              <Image 
                  src="/cycling-trips-images/cycling-trips.jpg"
                  alt="cycling trips"
                  height={300}
                  width={400}  
                  objectFit="contain"                                                                  
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                  priority    
                  className='image-border-radius'                        
              />
            </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center mb-4">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='text-wrapper mb-4'>
                <h5>{t("weOffer")}</h5>
                <h5>{t("sendInquiryMsg")}</h5>
              </div>
              
            </div>
            
            <div className='d-flex justify-content-center'>
              <Button variant="secondary" size="lg" className="text-uppercase" onClick={showFormModal}>{t("sendInquiry")}</Button>
            </div>
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

