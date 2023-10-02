import {useTranslations} from 'next-intl';
import { Table } from 'react-bootstrap';

function ServicePriceList({pricelistJson}) {
    const t = useTranslations("BikeService")

    return (
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>{t("service")}</th>
            <th>{t("price")}</th>
        </tr>
        </thead>
        <tbody>
        {pricelistJson && pricelistJson.services && pricelistJson.services.map((service, index) => (        
            <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
            </tr>  
        ))}
            
        </tbody>
    </Table>
    );
}

export default ServicePriceList;