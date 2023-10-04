import { Container, Row, Col } from "react-bootstrap";
import GeneralCard from "./generalCard";
import { useTranslations } from "next-intl";

function IndexPageBasicCards() {
    const t = useTranslations("Index");

    return (
    <Container>
        <Row className="index-page-cards my-5" >
            <Col className="d-flex mb-4 justify-content-center">            
                <GeneralCard
                title={t("rentaBike")} 
                bottomText={t("priceFrom", {price: "13"})}
                OnClick={()=>{console.log("SDHAIJSDHIAKSDH")}}
            />           
            </Col>
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("bikeServis")} 
                    bottomText={t("priceFrom", {price: "33"})}
                    OnClick={()=>{router.push('/bike-servis')}}
                />
            </Col>
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("econoBikesSale")} 
                    OnClick={()=>{}}
                />
            </Col>
            <Col className="d-flex mb-4 justify-content-center">
                <GeneralCard 
                    title={t("eBikeUpgrade")}
                    OnClick={()=>{router.push('/ebike-upgrade')}} 
                />
            </Col>           
        </Row>   
    </Container> 
    );
}

export default IndexPageBasicCards;