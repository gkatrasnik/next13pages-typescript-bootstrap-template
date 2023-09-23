import Head from 'next/head'
import Image from 'next/image'
import phone from '../public/phone-issue.png'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import {Container, Button, Row, Col} from 'react-bootstrap'

export default function Home() {
    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>
      <Container >
        <Row className='h-100'>
          <Col xs={12} md={6} className="mb-4">
            <div className="h-100 text-center my-4 d-flex flex-column alling-items-center justify-content-center">
             <h1 className=' mb-4'>Welcome to Ab bike</h1>
             <p className='mb-4'>“bla bla”</p>
             <Button variant="primary" size="lg" href="/about" className='mx-auto mt-4 ' >Learn more</Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4"> 
            <div className=' h-100 my-4 d-flex justify-content-center align-items-center'>
              <Image
                alt="Mountains"
                src={phone}
                placeholder="blur"
                width={200}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </Col>
        </Row>     
      </Container>
    </>
  )
}

