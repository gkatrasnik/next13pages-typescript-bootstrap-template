import { Container, Row, Col } from 'react-bootstrap'
import {useTranslations} from 'next-intl';
import SocialMediaLinks from './socialMediaLinks';
import PartnerLogos from './partnerLogos';

const MyFooter = () => {
  const t = useTranslations('Footer');

  return (    
    <footer className='bg-light'>
      <Container  className='px-4'>
        <Row className='h-100'>         
          <Col md={{span:6, order:2}} className='py-3 mt-3'>
            <p className="fw-bold pb-1 h5">{t("contact")}</p>
            <div className='d-flex flex-column'>              
              <div className="fw-bold pb-1">
                {t("tel")}
                <a href="tel: +386 (0)40 219 415" className='footer-link'>+386 (0)40 219 415</a> 
              </div>                      
              <div className="fw-bold pb-1">
                {t("email")}  
                <a href="mailto:info@ab-bike.si" className='footer-link'>info@ab-bike.si</a>
              </div> 
              <div className="fw-bold pb-1">{t("address")}</div> 
              <div className="fw-bold pb-1">{t("company")}</div> 
            </div>
          </Col>

          <Col md={{span:6, order:1}} className='py-3 mt-3 d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
              <SocialMediaLinks iconSize={48} />
              <PartnerLogos imageSrcs={["/logo/alpina.png", "/logo/ziener.png", "/logo/asa.png"]}/>
            </div>                     
          </Col>
        </Row>      
        <Row className='h-100'>
          <Col>
            <div>
              <p className='text-muted text-center small mt-5'>&copy; 2023 GK</p>
            </div>
          </Col>
        </Row>
    </Container>
  </footer>
  )
}

export default MyFooter;