import { useState, FC } from 'react';
import Head from 'next/head'
import {Container, Row, Col, Button} from 'react-bootstrap'
import ServicePriceList from '../components/servicePriceList';
import {useTranslations} from 'next-intl';
import GeneralCard from '../components/generalCard';
import FormModal from '../components/formModal';
import { GetStaticProps } from 'next';

interface BikeServiceProps {
  pricelist: BikeServicesObject;
  messages: Record<string, string>;
}

const BikeService: FC<BikeServiceProps> = (props) => {
  const [formModalShowed, setFormModalShowed] = useState(false);
  const t = useTranslations('BikeService');

  const closeFormModal = () => {
    setFormModalShowed(false);
  }

  const showFormModal = () => {
  setFormModalShowed(true);
  }

  return (
  <>
    {formModalShowed && <FormModal formIsForService={true} handleClose={closeFormModal}/>}

    <Head>
        <title>{t("bikeRepairs")}</title>
        <meta name="description" content={t('description')} />
    </Head> 
    <Container className="my-5 d-flex flex-column ">
      <h1 className='text-center fw-bold mb-5'>{t("bikeService")}</h1>
      <Row>
        <Col>
          <div className='mb-3'>
            <h2 className='fw-bold mb-4'>{t("bikeRepairs")}</h2>
            <div className='mb-3'>
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div> 
            <p className='text-primary fw-bold mb-5 h5'>{t("paragraph4")}</p>                  
          </div>
        </Col>
      </Row>     
      <Row className='mb-5 bike-service-cards'>
          <Col sm={4} className='d-flex justify-content-center my-3'>
            <GeneralCard
              title={t("generalServiceTitle")}
              bullets={[t("generalServiceBullet1"), t("generalServiceBullet2"), t("generalServiceBullet3"), t("generalServiceBullet4"),t("generalServiceBullet5"),t("generalServiceBullet6"),]}
              bottomText={t("generalServiceBottomText")}
            />
          </Col>
          <Col sm={4} className='d-flex justify-content-center my-3'>
            <GeneralCard
              title={t("yearlyServiceTitle")}
              bullets={[t("yearlyServiceBullet1"), t("yearlyServiceBullet2"), t("yearlyServiceBullet3"), t("yearlyServiceBullet4"),t("yearlyServiceBullet5"),t("yearlyServiceBullet6"),t("yearlyServiceBullet7")]}
              bottomText={t("yearlyServiceBottomText")}
            />
          </Col>
          <Col sm={4} className='d-flex justify-content-center my-3'>
            <GeneralCard
              title={t("largeServiceTitle")}
              bullets={[t("largeServiceBullet1"), t("largeServiceBullet2"), t("largeServiceBullet3"), t("largeServiceBullet4"),t("largeServiceBullet5")]}
              bottomText={t("largeServiceBottomText")}
            />
          </Col>
      </Row>
      <Row>
        <Col className="mb-4">
          <div className='d-flex justify-content-center mb-5'>
            <Button size="lg" variant="secondary" className="text-uppercase" onClick={showFormModal}>{t("sendInquiry")}</Button>
          </div>
          <h3 className='text-center mb-3'>{t("pricelist")}</h3>
          <ServicePriceList pricelistJson={props.pricelist}/>
          <div className='mt-5'>
            <p>{t("bottomText1")}</p>
            <p>{t("bottomText2")}</p>
            <p>{t("bottomText3")}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export const getStaticProps: GetStaticProps = async (context)  => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
      pricelist: (await import(`../assets/prices-service-${context.locale}.json`)).default
    }
  };
}

export default BikeService;

