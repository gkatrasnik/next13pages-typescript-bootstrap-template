import { Container, Row, Col } from "react-bootstrap";
import GeneralCard from "./generalCard";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'

const IndexPageBasicCards = (): JSX.Element => {
    const t = useTranslations("Index");
    const router = useRouter();

    return (
    <Container>
        <Row className="index-page-cards mb-5" >
            <Col className="d-flex mb-4 justify-content-center">            
                <GeneralCard
                title={t("rentaBike")} 
                bottomText={t("priceFrom", {price: "13"})}
                imageSrc="/index-card-images/renta-bike.jpg"
                onCardClick={()=>{router.push('/rent-a-bike')}}
            />           
            </Col>
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("bikeService")} 
                    bottomText={t("priceFrom", {price: "33"})}
                    imageSrc="/index-card-images/service.jpg"
                    onCardClick={()=>{router.push('/bike-service')}}
                />
            </Col>            
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("eBikeUpgrade")}
                    imageSrc="/index-card-images/ebike-upgrade.jpg"
                    onCardClick={()=>{router.push('/ebike-upgrade')}} 
                />
            </Col>    
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("econoBikesSale")} 
                    imageSrc="/index-card-images/econo-bike.jpg"
                    onCardClick={()=>{}}
                />
            </Col>       
        </Row>   
    </Container> 
    );
}

export default IndexPageBasicCards;