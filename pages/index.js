import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import RentCard from '../components/rentCard';
import ImageGallery from '../components/imageGallery';
import GoogleMap from '../components/googleMap';
import GeneralCardCard from '../components/generalCard';
import HeroSection from '../components/heroSection';


export default function Home() {
    const t = useTranslations('Index');
    const trc = useTranslations('RentCard');

    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>     
      
      <HeroSection heroImageSrc="/hero.jpg"/>
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
        <Row >
          <Col className="mb-4">
            <GeneralCardCard 
              title="Medium Plan"
              subtitle="Up to 10 employees"
              mainText="Get access to all of our features and priority support. Ideal for growing businesses with expanding needs."
              bullets={["Unlimited patients","Appointment scheduling","Priority email and phone support", "Custom branding"]}
              bottomText="Comming Soon"
              buttonText="Comming Soon"
            />
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
