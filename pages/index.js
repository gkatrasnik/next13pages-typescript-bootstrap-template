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
        <Row >
          <Col className="mb-4">
            <ImageGallery 
              imageSrcs={["/rent-items/haibike-hardnine-2-0.jpg",
                          "/rent-items/torpado-viper-24.jpg", 
                          "/rent-items/dog-cart.jpg", 
                          "/rent-items/torpado-puma-20.jpg", 
                          "/rent-items/sup.jpg"]}
            />        
          </Col>
        </Row>
        <Row >
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
