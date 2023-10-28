import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { GetStaticProps } from 'next';

const About = () => {
  const t = useTranslations('AboutUs');

  return (
    <>      
      <Head>
        <title>{t("aboutUsTitle")}</title>
        <meta name="description" content={t('description')} />
      </Head> 
      <Container className="my-5 d-flex flex-column ">
        <Row>
          <Col sm={12}>
            <div className='mb-3'>
              <h1 className='fw-bold mb-4'>{t("aboutUsH1")}</h1>
              <p className='h3 mb-0'>{t("weAre")}</p>
              <p className='h3'>{t("partners")}</p>
              <p className='mb-4'>{t("partnersText")}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mb-5">
            <div className="about-us-hero-container">
              <Image 
                  src="/about-us-images/about-us-1.jpg"
                  alt="Ana in Blaž"
                  fill                                                                                       
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                  priority      
                  className='image-border-radius'  
                  style={{                 
                    objectFit:"cover"                
                  }}       
              />
            </div>              
          </Col>
        </Row>          
        <Row className='mb-5'>
          <Col sm={12}>
            <p className='fw-bold text-primary h4'>{t("quote1")}</p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md={6} className='d-flex justify-content-center align-items-center '>
            <Image 
                src="/about-us-images/about-us-2.jpg"
                alt="Ana in Blaž na kolesih"
                height={300}
                width={400}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                className='image-border-radius'
                style={{                 
                  objectFit:"cover"                
                }}       
            />              
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <p className='text-muted fw-bold fst-italic mb-3 h5'>{t("quote2")}</p>
              <p className='text-muted'>{t("paragraph2")}</p>  
            </div>          
          </Col>
        </Row>  
        <Row className='mb-5'>
          <Col>
            <p className='text-primary fw-bold mb-3 h5'>{t("weOffer")}</p>
            <ul className='mb-5'>
              <li>{t("weOfferBullet1")}</li>
              <li>{t("weOfferBullet2")}</li>
              <li>{t("weOfferBullet3")}</li>
              <li>{t("weOfferBullet4")}</li>
              <li>{t("weOfferBullet5")}</li>
            </ul>
            <p>{t("comeToOurShop")}</p>               
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

export default About;
