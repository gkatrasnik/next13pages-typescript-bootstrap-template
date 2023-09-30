import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import RentCard from '../components/rentCard';
import BasicImage from '../components/basicImage';
import ImageGallery from '../components/imageGallery';


export default function Home() {
    const t = useTranslations('Index');
    const trc = useTranslations('RentCard');

    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>     
      
      <Container >
        <Row >
          <Col xs={12} md={6} className="mb-4">
            <div className="h-100 text-center my-4 d-flex flex-column alling-items-center justify-content-center">
             <h1 className=' mb-4'>{t('title')}</h1>
             <p className='mb-4'>{t('description')}</p>            
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4"> 
            <div className=' h-100 my-4 d-flex justify-content-center align-items-center'>
              <RentCard 
                title="Very nice bike"
                bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
                price="40€"
                imageSrc="/rent-items/haibike-hardnine-2-0.jpg"
              />
            </div>
          </Col>
        </Row>     
        <Row >
          <Col className="mb-4">
          <ImageGallery>
              <BasicImage imageSrc="/rent-items/haibike-hardnine-2-0.jpg"/>
              <BasicImage imageSrc="/rent-items/torpado-viper-24.jpg"/>
              <BasicImage imageSrc="/rent-items/dog-cart.jpg"/>
              <BasicImage imageSrc="/rent-items/torpado-puma-20.jpg"/>
              <BasicImage imageSrc="/rent-items/sup.jpg"/>

            </ImageGallery>
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
