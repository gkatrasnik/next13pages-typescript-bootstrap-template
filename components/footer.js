import { Container, Row, Col } from 'react-bootstrap'
import {useTranslations} from 'next-intl';


export default function MyFooter() {
  const t = useTranslations('Footer');

  return (    
    <footer className='bg-light'>
      <Container  className='px-4'>
        <Row className='h-100'>         
          <Col xs={12} md={{span:6, order:2}} className='py-4'>
            <h5 className="fw-bold pb-1">{t("contact")}</h5>
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

          <Col xs={12} md={{span:6, order:1}} className='py-4'>
            <h5 className="fw-bold pb-1">{t("partners")}</h5>
            <div className="fw-bold pb-1">LOGO</div> 
            <div className="fw-bold pb-1">LOGO</div> 
            <div className="fw-bold pb-1">LOGO</div> 
            <div className="fw-bold pb-1">LOGO</div>
          </Col>
        </Row>      
    </Container>
  </footer>
  )
}