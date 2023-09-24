import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import {Container, Button, Row, Col} from 'react-bootstrap'

export default function About() {
    return (
    <>
      <Head>
        <title>About Fiziap</title>
      </Head>
      <Container className="my-5 d-flex flex-column ">
        <h1 className='text-center mb-5'>About Ab bike</h1>
          <Row className='h-100'>
            <Col xs={12} md={6} className="mb-4">
              <p>Are you a physiotherapist looking for a better way to manage your patient information and appointments? Look no further than Fiziap!</p>
            </Col>
          </Row>
          <Row className='h-100'>
            <Col xs={12} md={{ span: 6, offset: 6}} className="mb-4">
              <p>Fiziap is an innovative application designed specifically for physiotherapists. With Fiziap, you can easily keep track of your patients issues and symptoms, monitor their progress, and schedule appointments. Our user-friendly interface makes it easy to manage all of your patient information in one convenient location.</p>
            </Col>
          </Row>       
        <Button variant="primary" size="lg" href="/pricing" className='mx-auto my-4' >Pricing</Button>
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

