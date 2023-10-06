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
          <Row className='mb-5'>
            <Col className="mb-4">
              <div className="about-us-hero-container">
                <Image 
                    src="/about-us-images/about-us-1.jpg"
                    alt="Ana in Blaž"
                    layout="fill"  
                    objectFit="cover"                                                                  
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    priority      
                    className='image-border-radius'  
                />
              </div>              
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col className="mb-4">
              <h2 className='fw-bold mb-4'>{t("weAre")}</h2>
              <h3 className='text-secondary fw-bold mb-4'>{t("partners")}</h3>
              <p className='mb-5'>{t("partnersText")}</p>

              <h4 className='fw-bold fst-italic text-primary display-5'>{t("quote1")}</h4>
            </Col>
          </Row>   

          <Row className='mb-5'>
            <Col xs={12} md={6}>
              <div className='about-us-image-conainer mb-3'>
                <Image 
                    src="/about-us-images/about-us-2.jpg"
                    alt="Ana in Blaž na kolesih"
                    height={300}
                    width={400}
                    objectFit="contain"                                                                  
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                    className='image-border-radius'
                />
              </div>
              
            </Col>
            <Col xs={12} md={6}>
              <h5 className='text-muted fw-bold fst-italic display-6 mb-3'>{t("quote2")}</h5>
              <p className='text-muted'>{t("paragraph2")}</p>            
            </Col>
          </Row>  
          <Row className='mb-5'>
            <Col>
              <h5 className='text-muted fw-bold display-6 mb-3'>{t("weOffer")}</h5>
              <ul className='bg-light mb-5'>
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

