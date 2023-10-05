import Head from 'next/head'
import {useTranslations} from 'next-intl';
import { Container, Row, Col } from 'react-bootstrap'
import RentCard from '../components/rentCard'

export default function RentABike(props) {
  const trc = useTranslations('RentCard');

  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Container className="my-5">
        <h1 className=' text-center mb-5'>Pricing</h1>
        
          <div className='d-flex flex-wrap justify-content-evenly'>
            {props?.rentItems?.items?.map(rentItem => {
                return (
                    <RentCard 
                      key={rentItem.title}
                      title={rentItem.title}
                      bullets={rentItem.bullets}
                      price={rentItem.price}
                      imageSrc={rentItem.imageSrc}
                    />
                );              
              }
            )}    
          </div>               
        
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

