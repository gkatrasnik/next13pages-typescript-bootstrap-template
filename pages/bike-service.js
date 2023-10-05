import Head from 'next/head'
import {Container, Row, Col} from 'react-bootstrap'
import ServicePriceList from '../components/servicePriceList';
import {useTranslations} from 'next-intl';
import GeneralCard from '../components/generalCard';

export default function BikeService(props) {
  const t = useTranslations('BikeService');

  return (
  <>
    <Head>
      <title>{t("bikeService")}</title>
    </Head>
    <Container className="my-5 d-flex flex-column ">
      <h1 className='text-center mb-5'>{t("bikeService")}</h1>
      <Row>
        <div className='mb-5'>
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
          <p>{t("paragraph4")}</p>
        </div>        
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
      <Row className='h-100'>
        <Col className="mb-4">
          <h2 className='text-center mb-3'>{t("pricelist")}</h2>
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

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
      pricelist: (await import(`../assets/prices-service-${context.locale}.json`)).default
    }
  };
}

