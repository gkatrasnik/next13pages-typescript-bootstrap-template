import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import ImageGallery from '../components/imageGallery';
import HeroSection from '../components/heroSection';
import IndexPageBasicCards from '../components/indexPageBasicCards';
import { GetStaticProps } from 'next';
import { fetchGooglePlacesData } from '../service/googlePlacesService';
import { FC } from 'react';
import GooglePlacesReviews from '../components/googlePlacesReviews';

interface HomeProps {
  messages: Record<string, string>;
  placesData: GooglePlaceDetails;
}

const Home: FC<HomeProps> = (props): JSX.Element => {
  const t = useTranslations('Index');

  return (
    <>
      <Head>
        <title>AB Bike</title>
        <meta name="description" content={t('description')} />
      </Head>           
      <HeroSection rating={props.placesData.rating} heroImageSrc="/hero.jpg"/>
      <GooglePlacesReviews reviews={props.placesData.reviews}/>
      <IndexPageBasicCards/>
      <Container >    
        <Row className='mb-5'>
          <Col className="mb-4">
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
    revalidate: 86400 //parseInt(process.env.GOOGLE_PLACES_DATA_REVALIDATE!) // Re-fetch the data every 24 hours (86400 seconds)
  };
}

export default Home;