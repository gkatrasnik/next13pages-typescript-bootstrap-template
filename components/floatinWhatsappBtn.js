import Button from 'react-bootstrap/Button';
import { Whatsapp } from 'react-bootstrap-icons';
import { useTranslations } from 'next-intl';

function FloatingWhatsappBtn() {
    const t = useTranslations("Index");
    return (
        <div className='floating-whatsapp-btn'>
            <Button 
                className='d-flex align-items-center justify-space-evenly rounded-pill' 
                style={{backgroundColor:"#25D366", color:"white", borderColor:"white"}} 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER}`}
            >
                <Whatsapp className='me-2'  size={20}/> 
                {t("whatsapp")}
            </Button>      
        </div>
    );
}

export default FloatingWhatsappBtn;