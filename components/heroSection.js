import {useTranslations} from 'next-intl';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Image from 'next/image';
import { useRouter } from 'next/navigation'


function HeroSection({heroImageSrc}) {
    const t = useTranslations('Index');
    const router = useRouter();

    return (
     
        <div className="hero mb-5">
            <Image 
                src={heroImageSrc}
                alt="Hero Image"
                layout="fill"  
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="   
                style={{                 
                    objectFit:"cover"                
                }}       
                priority         
            />
            <div className="hero-content">
                <Container className="h-100 d-flex">
                    <Row className='d-flex flex-grow-1'>
                        <Col md={true} className="mb-4 d-flex flex-column alling-items-center justify-content-center">
                            <div className="h-100 my-4 d-flex flex-column alling-items-center justify-content-center">
                                <div>
                                    <h1 className=' text-center text-white mb-4 fw-bold display-4'>{t('title')}</h1>                                
                                    <p className='text-white mb-4'>{t('description')}</p>
                                </div>                                
                                <div className='d-flex justify-content-center'>
                                    <Button variant="secondary" className='m-2 text-uppercase' onClick={() => router.push('/rent-a-bike')}>{t('rentButton')}</Button>    
                                    <Button variant="secondary" className='m-2 text-uppercase' onClick={() => router.push('/bike-service')}>{t('serviceButton')}</Button>  
                                </div>            
                            </div>
                        </Col>
                        <Col md={true} className="d-none d-md-flex mb-4 d-flex flex-column alling-items-center justify-content-center">                            
                        </Col>
                    </Row>   
                </Container>                
            </div>            
        </div>

    );
}

export default HeroSection;