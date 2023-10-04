import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import RentCard from '../components/rentCard'

export default function Pricing() {
     return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Container className="my-5">
        <h1 className=' text-center mb-5'>Pricing</h1>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <RentCard
              title="Very nice bike"           
              bullets={["blablablas","blablablas","blablablas"]}
              price="45€/dan"
              imageSrc="/index-card-images/econo-bike.jpg"
            />            
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <RentCard
              title="Very nice bike2"           
              bullets={["blablablas","blablablas","blablablas"]}
              price="45€/dan"
              imageSrc="/index-card-images/econo-bike.jpg"
            />            
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <RentCard
              title="Very nice bike3"           
              bullets={["blablablas","blablablas","blablablas"]}
              price="45€/dan"
              imageSrc="/index-card-images/econo-bike.jpg"
            />            
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <RentCard
              title="Very nice bike4"           
              bullets={["blablablas","blablablas","blablablas"]}
              price="45€/dan"
              imageSrc="/index-card-images/econo-bike.jpg"
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

