import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function About() {
    const t = useTranslations('AboutUs');

    return (
    <>
      <Head>
        <title>{t("aboutUs")}</title>
      </Head>
      <Container className="my-5 d-flex flex-column ">
        <h1 className='text-center mb-5'>{t("aboutUs")}</h1>
          <Row>
            <Col className="mb-5">
              <div className="about-us-hero-container">
                <Image 
                    src="/about-us-images/about-us-1.jpg"
                    alt="Ana in Blaž"
                    layout="fill"                                                                                       
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
          <Row >
            <Col className="mb-5">
              <div className='mb-3'>
                <h3 className='fw-bold'>{t("weAre")}</h3>
                <h3 className='fw-bold '>{t("partners")}</h3>
              </div>
              <p className='mb-5'>{t("partnersText")}</p>
              <h4 className='fw-bold text-primary'>{t("quote1")}</h4>
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
                <h5 className='text-muted fw-bold fst-italic mb-3'>{t("quote2")}</h5>
                <p className='text-muted'>{t("paragraph2")}</p>  
              </div>          
            </Col>
          </Row>  
          <Row className='mb-5'>
            <Col>
              <h5 className='text-primary fw-bold mb-3'>{t("weOffer")}</h5>
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

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}

