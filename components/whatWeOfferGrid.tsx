import { useTranslations } from "next-intl"
import { Container, Row, Col } from "react-bootstrap"
import { Bicycle, Wrench, Shop, Lightning } from "react-bootstrap-icons"
import Link from "next/link"

const WhatWeOfferGrid = () => {
    const t = useTranslations("Index");

    return (        
         <Container className="mb-5">
            <Row className="my-5">
                <Col md={3}>
                    <div className="p-4 text-center ">
                        <Bicycle size={48} className="mb-2 text-primary"/>
                        <Link href="/rent-a-bike">
                            <h2 className="fw-bold">{t("offeringsRentalTitle")}</h2>
                        </Link>
                        <p>{t("offeringsRentalText")}</p>
                    </div>                    
                </Col>
                <Col md={3}>
                <div className="p-4 text-center">
                        <Wrench size={48} className="mb-2 text-primary"/>
                        <Link href="/bike-service">
                            <h2 className="fw-bold">{t("offeringsBikeSeriveTitle")}</h2>
                        </Link>
                        <p>{t("offeringsBikeSeriveText")}</p>
                    </div>   
                </Col>
                <Col md={3}>
                <div className="p-4 text-center">
                        <Lightning size={48} className="mb-2 text-primary"/>
                        <Link href="/ebike-upgrade">
                            <h2 className="fw-bold">{t("offeringsEBikeUpgradeTitle")}</h2>
                        </Link>
                        <p>{t("offeringsEBikeUpgradeText")}</p>
                    </div>  
                </Col> 
                <Col md={3}>
                <div className="p-4 text-center">
                        <Shop size={48} className="mb-2 text-primary"/>
                        <h2 className="fw-bold">{t("offeringsShopTitle")}</h2>
                        <p>{t("offeringsShopText")}</p>
                    </div>   
                </Col>
            </Row>
         </Container>
    )
}

export default WhatWeOfferGrid;