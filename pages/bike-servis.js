import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import ServicePriceList from '../components/servicePriceList';

export default function BikeServis(props) {
    return (
    <>
      <Head>
        <title>Servis</title>
      </Head>
      <Container className="my-5 d-flex flex-column ">
        <h1 className='text-center mb-5'>Servis</h1>
          <Row className='h-100'>
            <Col className="mb-4">
              <ServicePriceList pricelistJson={props.pricelist}/>
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
      pricelist: (await import(`../assets/cenik-servis-${context.locale}.json`)).default
    }
  };
}

