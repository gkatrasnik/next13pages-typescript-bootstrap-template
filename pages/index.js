import Head from 'next/head'
import Image from 'next/image'
import phone from '../public/phone-issue.png'
//import Image from 'next/image'
//import styles from '../styles/Home.module.scss'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import FormModal from '../components/formModal'
import {useState} from 'react'

export default function Home() {
    const t = useTranslations('Index');
    const [showFormModal, setShowFormModal] = useState(false);//TODO move to pages with form modal!!!

    // -------------------------------------------------------------------
    //TODO move to pages with form modal!!!
    const closeFormModal = () => {
      setShowFormModal(false);
    }
    // -------------------------------------------------------------------

    return (
    <>
      <Head>
        <title>AB Bike</title>
      </Head>

      {showFormModal && <FormModal formIsForRent handleClose={closeFormModal}/>}
      <Container >
        <Row className='h-100'>
          <Col xs={12} md={6} className="mb-4">
            <div className="h-100 text-center my-4 d-flex flex-column alling-items-center justify-content-center">
             <h1 className=' mb-4'>{t('title')}</h1>
             <p className='mb-4'>{t('description')}</p>
             <Button variant="primary" size="lg"  className='mx-auto mt-4 ' onClick={()=>{setShowFormModal(!showFormModal)}}>Povpraševanje</Button>
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

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}
