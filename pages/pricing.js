import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import PricingCard from '../components/pricingCard'

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
            <PricingCard
              title="Small Plan"
              subtitle="Up to 3 employees"
              mainText="Get access to all of our features at an affordable price. Perfect for small businesses just starting out."
              bullets={["Unlimited patients","Appointment scheduling","Email support"]}
              buttonText="10€/month"
            />            
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <PricingCard
              title="Medium Plan"
              subtitle="Up to 10 employees"
              mainText="Get access to all of our features and priority support. Ideal for growing businesses with expanding needs."
              bullets={["Unlimited patients","Appointment scheduling","Priority email and phone support", "Custom branding"]}
              buttonText="25€/month"
            />    
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <PricingCard
              title="Custom Plan"
              subtitle="For larger businesses"
              mainText="We will work with you to create a custom plan that meets your needs."
              bullets={["Unlimited patients","Appointment scheduling","Dedicated support manager", "Custom branding and integrations"]}
              buttonText="Contact Us"
            />   
          </Col>
        </Row>
      </Container>
    </>
  )
}

