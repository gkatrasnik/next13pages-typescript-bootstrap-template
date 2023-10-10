import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import ImageGallery from '../components/imageGallery';
import HeroSection from '../components/heroSection';
import IndexPageBasicCards from '../components/indexPageBasicCards';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}


export default function Home() {
    const t = useTranslations('Index');

    return (
    <>
      <Head>
        <title>AB Bike</title>
        <meta name="description" content={t('description')} />
      </Head>           
      <HeroSection heroImageSrc="/hero.jpg"/>
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

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}
