import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import ImageGallery from '../components/imageGallery';
import HeroSection from '../components/heroSection';
import { GetStaticProps } from 'next';
import { fetchGooglePlacesData } from '../service/googlePlacesService';
import { FC } from 'react';
import GooglePlacesReviews from '../components/googlePlacesReviews';
import WhatWeOfferGrid from '../components/whatWeOfferGrid';

interface HomeProps {
  messages: Record<string, string>;
  placesData: GooglePlaceDetails;
}

const Home: FC<HomeProps> = (props): JSX.Element => {
  const t = useTranslations('Index');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>           
      <HeroSection rating={props.placesData.rating} heroImageSrc="/hero.jpg"/>
      <Container> 
        <Row className='my-5'>
            <Col md={6}>
              <div className='px-4 pb-4 pt-3'>
                <h2 className='fw-bold'>{t("reviewsTitle")}</h2>
                <p>{t("reviewsText")}</p>
              </div>
            </Col>                
            <Col md={6}>
              <GooglePlacesReviews reviews={props.placesData.reviews}/>
            </Col>
        </Row>
      </Container>
      <Container fluid className='bg-light'>
        <WhatWeOfferGrid />
      </Container>
      {/*<IndexPageBasicCards/>*/}
      <Container >    
        <Row className='my-5'>
          <Col sm={12} className="mb-4">
            <div className='px-4'>
              <h2 className='fw-bold'>{t("galleryTitle")}</h2>
              <p>{t("galleryText")}</p>
            </div>
            <ImageGallery 
              imageSrcs={["/index-gallery-images/image1.jpg",
                          "/index-gallery-images/image2.jpg", 
                          "/index-gallery-images/image3.jpg", 
                          "/index-gallery-images/image4.jpg", 
                          "/index-gallery-images/image5.jpg",
                          "/index-gallery-images/image6.jpg",
                          "/index-gallery-images/image7.jpg",
                          "/index-gallery-images/image8.jpg",
                          "/index-gallery-images/image9.jpg",
                          "/index-gallery-images/image10.jpg",
                          "/index-gallery-images/image11.jpg"
                        ]}
            />        
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
      messages: (await import(`../messages/${context.locale || "sl"}.json`)).default,
      placesData: placesData
    },
    revalidate: parseInt(process.env.GOOGLE_PLACES_DATA_REVALIDATE!) // Re-fetch the data every 24 hours (86400 seconds) 
  };
}

export default Home;