import { useState } from 'react';
import Head from 'next/head'
import {useTranslations} from 'next-intl';
import {Container, Button, Row, Col} from 'react-bootstrap'
import Image from 'next/image';
import FormModal from '../components/formModal';

export default function About() {
    const [formModalShowed, setFormModalShowed] = useState(false);
    const t = useTranslations('EbikeUpgrade');

    const closeFormModal = () => {
      setFormModalShowed(false);
    }
  
    const showFormModal = () => {
    setFormModalShowed(true);
    }

    return (
    <>
      {formModalShowed && <FormModal formIsForUpgrade handleClose={closeFormModal}/>}

      <Head>
        <title>{t('eBikeUpgradeTitle')}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column ">
        <h1 className='text-center fw-bold mb-5'>{t("ebikeUpgrade")}</h1>
        <Row>
          <Col>
            <div className='mb-3'>
              <h2 className='fw-bold mb-4'>{t("upgradeYourOldBike")}</h2>
              <p>{t("upgradeYourOldBikeText")}</p>
            </div> 
          </Col>
        </Row>
              
        <Row >
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center mb-4 overflow-hidden">
            <p className='mb-3 text-primary fw-bold h5'>{t("upgradeDetailsTitle")}</p>
            <ul className='mb-5'>
                <li>{t("upgradeDetails1")}</li>
                <li>{t("upgradeDetails2")}</li>
                <li>{t("upgradeDetails3")}</li>
                <li>{t("upgradeDetails4")}</li>
              </ul>
          </Col>
          <Col md={6} className="d-flex justify-content-center mb-4 overflow-hidden"> 
              <Image 
                  src="/ebike-upgrade-images/upgrade-kit.jpg"
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
        </Row>      
        <Row >
          <Col className="mb-4">
            <p>{t("econoPackageIncludes")}</p>
            <p>{t("youCanPick")}</p>
            
          </Col>
        </Row> 
        <Row >
          <Col className='mb-5'>
            <p className='text-center fw-bold h4'>{t("upgradePrice")}</p>
            <div className='d-flex justify-content-center mt-4'>
              <Button size="lg" variant="secondary" className="text-uppercase" onClick={showFormModal}>{t("sendInquiry")}</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center overflow-hidden mb-4"> 
              <Image 
                  src="/ebike-upgrade-images/pre-upgrade.jpg"
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
            <p>{t("preUpgrade")}</p>
          </Col>    
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center overflow-hidden mb-4"> 
              <Image 
                  src="/ebike-upgrade-images/post-upgrade.jpg"
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
            <p>{t("postUpgrade")}</p>
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

