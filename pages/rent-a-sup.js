import Head from 'next/head'
import {useTranslations} from 'next-intl';
import {Container, Button, Row, Col} from 'react-bootstrap'

export default function About() {
    const t = useTranslations('RentASup');

    return (
    <>
      <Head>
        <title>{t("rentASup")}</title>
      </Head>
      <Container className="my-5 d-flex flex-column ">
        <h1 className='text-center mb-5'>{t("rentASup")}</h1>
          <Row className='h-100'>
            <Col xs={12} md={6} className="mb-4">
              <p>Coming soon...</p>
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

