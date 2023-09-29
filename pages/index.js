import Head from 'next/head'

//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import FormModal from '../components/formModal'
import {useState} from 'react'
import RentCard from '../components/rentCard';

export default function Home() {
    const t = useTranslations('Index');
    const trc = useTranslations('RentCard');
    const [formModalShowed, setFormModalShowed] = useState(false);//TODO move to pages with form modal!!!

    // -------------------------------------------------------------------
    //TODO move to pages with form modal!!!
    const closeFormModal = () => {
      setFormModalShowed(false);
    }

    const showFormModal = () => {
      setFormModalShowed(true);
    }
    // -------------------------------------------------------------------

    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>

      {formModalShowed && <FormModal  handleClose={closeFormModal}/>}
      <Container >
        <Row className='h-100'>
          <Col xs={12} md={6} className="mb-4">
            <div className="h-100 text-center my-4 d-flex flex-column alling-items-center justify-content-center">
             <h1 className=' mb-4'>{t('title')}</h1>
             <p className='mb-4'>{t('description')}</p>
             <Button variant="primary" size="lg"  className='mx-auto mt-4 ' onClick={()=>{setShowFormModal(!formModalShowed)}}>Povpraševanje</Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="mb-4"> 
            <div className=' h-100 my-4 d-flex justify-content-center align-items-center'>
              <RentCard 
                title="Very nice bike"
                bullets={[ `${trc("derailleur")}: Shimano ultegra`, `${trc("brakes")}: Shimano ultegra`, `${trc("suspension")}: RockShox reba rl`]}
                price="40€"
                imageSrc="/rent-items/haibike-hardnine-7.jpg"
                actionCallback={showFormModal}
              />
            </div>
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
