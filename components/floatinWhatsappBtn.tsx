import Button from 'react-bootstrap/Button';
import { Whatsapp } from 'react-bootstrap-icons';
import { useTranslations } from 'next-intl';

interface FloatingWhatsappBtnProps {
    size: "sm" | "lg" | undefined
}

const FloatingWhatsappBtn = ({size}: FloatingWhatsappBtnProps) => {
    const t = useTranslations("Index");
    return (
        <div className='floating-whatsapp-btn'>
            <Button 
                size={size}
                className='d-flex align-items-center justify-space-evenly rounded-pill' 
                style={{backgroundColor:"#25D366", color:"white", borderColor:"white"}} 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            >
                <Whatsapp className='me-2'  size={24}/> 
                {t("whatsapp")}
            </Button>      
        </div>
    );
}

export default FloatingWhatsappBtn;