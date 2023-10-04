import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import RentCard from '../components/rentCard';
import ImageGallery from '../components/imageGallery';
import GoogleMap from '../components/googleMap';
import GeneralCardCard from '../components/generalCard';
import HeroSection from '../components/heroSection';
import GeneralCard from '../components/generalCard';
import { useRouter } from 'next/router';
import IndexPageBasicCards from '../components/indexPageBasicCards';


export default function Home() {
    const t = useTranslations('Index');
    const router = useRouter();

    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>     
      
      <HeroSection heroImageSrc="/hero.jpg"/>
      <IndexPageBasicCards/>
      <Container >    
        <Row className='mb-5'>
          <Col className="mb-4">
            <ImageGallery 
              imageSrcs={["/index-images/image1.jpg",
                          "/index-images/image2.jpg", 
                          "/index-images/image3.jpg", 
                          "/index-images/image4.jpg", 
                          "/index-images/image5.jpg",
                          "/index-images/image6.jpg",
                          "/index-images/image7.jpg",
                          "/index-images/image8.jpg",
                          "/index-images/image9.jpg",
                          "/index-images/image10.jpg",
                          "/index-images/image11.jpg"
                        ]}
            />        
          </Col>
        </Row>
        <Row className='my-5'>
          <Col className="mb-4">
            <GoogleMap/>
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
