import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {Montserrat, Open_Sans} from "next/font/google"


const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })


export default function About() {
    return (
    <>
      <Head>
        <title>About Fiziap</title>
      </Head>
      <Container className="my-5 d-flex flex-column ">
        <h1 className={montserrat.className + ' text-center mb-5'}>About Fiziap</h1>
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
          <Row className='h-100'>
            <Col xs={12} md={6} className="mb-4">
              <p>At Fiziap, we understand the importance of providing the best possible care to your patients. That is why we have designed our application to help you stay organized and focused on what matters most - helping your patients achieve their health goals.</p>
            </Col>
          </Row>
          <Row className='h-100'>
            <Col xs={12} md={{ span: 6, offset: 6}} className="mb-4">
              <p>Do not let administrative tasks get in the way of providing top-notch care to your patients. Try Fiziap today and see how it can revolutionize the way you manage your practice.</p>
            </Col>
          </Row>
       
        <Button variant="primary" size="lg" href="/pricing" className='mx-auto my-4' >Pricing</Button>

      </Container>
    </>
  )
}

