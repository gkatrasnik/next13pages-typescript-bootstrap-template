import Head from 'next/head'
import {useTranslations} from 'next-intl';
import { Container, Row, Col } from 'react-bootstrap'
import RentCard from '../components/rentCard'

export default function Pricing() {
  const trc = useTranslations('RentCard');

  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Container className="my-5">
        <h1 className=' text-center mb-5'>Pricing</h1>
        <Row>
          <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
            <RentCard 
              title="Very nice bike"
              bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
              price="40€"
              imageSrc="/rent-items/haibike-hardnine-2-0.jpg"
            />      
          </Col>
          <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
            <RentCard 
              title="Very nice bike"
              bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
              price="40€"
              imageSrc="/rent-items/haibike-hardnine-2-0.jpg"
            />               
          </Col>
          <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
            <RentCard 
              title="Very nice bike"
              bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
              price="40€"
              imageSrc="/rent-items/haibike-hardnine-2-0.jpg"
            />               
          </Col>
          <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
            <RentCard 
              title="Very nice bike"
              bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
              price="40€"
              imageSrc="/rent-items/haibike-hardnine-2-0.jpg"
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
      messages: (await import(`../messages/${context.locale}.json`)).default,
      rentItems: (await import(`../assets/rent-items-${context.locale}.json`)).default
    }
  };
}

