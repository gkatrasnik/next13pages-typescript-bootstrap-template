import { useRef, useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {useTranslations} from 'next-intl';
import { ArrowRepeat } from 'react-bootstrap-icons';

function FormModal({formIsForRent, formIsForUpgrade, formIsForService, handleClose}) {
    const t = useTranslations('FormModal');
    const [isSending, setIsSending] = useState(false);

    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const address = useRef();
    const dateTime = useRef();
    const message = useRef();

    const rentLength = useRef();
    const articleEbike = useRef();
    const articleRegularBike = useRef();
    const articleChildTrailer = useRef();
    const articleDogTrailer = useRef();
    const articleSup = useRef();
    
    const batteryCapacity = useRef();

    const getSelectedArticles = () => {
        // loop over select articles and return string of names
        const options = [articleEbike, articleRegularBike, articleChildTrailer, articleDogTrailer, articleSup];
        const selectedArticles = [];
        options.forEach(option => {
            if (option.current.checked) {
                selectedArticles.push(option.current.name)
            }
        });
        return selectedArticles.toString();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postSendEmail();
        handleClose();
    }

    const createEmail = () => 
    {
        const requestedService = formIsForRent ? "izposoja" : formIsForUpgrade ? "predelava kolesa" : formIsForService ? "servis kolesa" : "drugo";
        const emailData = {
            subject: "",
            text: ""
        }

        emailData.subject = `Povpraševanje ${requestedService} ${dateTime.current?.value || ""}`

        emailData.text = 
`Novo povpraševanje za storitev: ${requestedService},

- Ime: ${name.current.value}, 
- Telefon: ${phone.current.value}, 
- Email: ${email.current.value}, 
- Naslov: ${address.current?.value || "/"}, 
- Dodatno sporočilo: ${message.current.value}\n`

        if (formIsForRent) {
            emailData.text +=  
`- Željen datum izposoje: ${dateTime.current.value},
- Trajanje izposoje: ${rentLength.current.value},
- Željeni artikli: ${getSelectedArticles()}\n`           

        } else if (formIsForUpgrade) {
            emailData.text += `- Željena kapaciteta baterije: ${batteryCapacity.current.value}\n`
        } 

        return emailData
    }

    const postSendEmail = async () => {
        try {
            setIsSending(true);

            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/sendInquiry", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createEmail()),
            });

            const result = await response;

            setIsSending(false);
            console.log("Success:", result.statusText);

        } catch (error) {
            setIsSending(false);
            console.error("Error:", error);
        }
    }
    
    return (
       <>          
            <Modal centered show={true} onHide={handleClose}>
                <Modal.Header className="py-3" closeButton>
                <Modal.Title as="h5">{t('title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-3">
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                        <Form.Label>{t('labelName')} *</Form.Label>
                        <Form.Control     
                            required               
                            type="text"
                            ref={name}
                        />                
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                        <Form.Label>{t('labelPhone')} *</Form.Label>
                        <Form.Control 
                            required                   
                            type="tel"
                            ref={phone}
                        />                
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                        <Form.Label>{t('labelEmail')} *</Form.Label>
                        <Form.Control    
                            required   
                            type="email"
                            ref={email}
                        />                
                    </Form.Group>

                    {formIsForRent &&
                    <>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                            <Form.Label>{t('labelAddress')}</Form.Label>
                            <Form.Control                    
                                type="text"
                                ref={address}
                            />                
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('labelDateTime')} *</Form.Label>
                            <Form.Control                    
                                required
                                type="datetime-local"  
                                ref={dateTime}             
                            />                
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                            <Form.Label>{t('labelRentLength')} *</Form.Label>
                            <Form.Control       
                                required             
                                type="text"
                                ref={rentLength}
                            />                
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('labelArticle')}</Form.Label> 
                            <Form.Check                                
                                label={t('articleEbike')}
                                name="E Bike"
                                type="checkbox"
                                ref={articleEbike}
                                id="1"                                
                            />
                            <Form.Check
                                label={t('articleRegularbike')}
                                name="Navadno kolo"
                                type="checkbox"
                                ref={articleRegularBike}
                                id="2"
                            />
                            <Form.Check                                
                                label={t('articleChildTrailer')}
                                name="Otroška prikolica"
                                type="checkbox"
                                ref={articleChildTrailer}
                                id="3"
                            />
                            <Form.Check                                
                                label={t('articleDogTrailer')}
                                name="Prikolica za psa"
                                type="checkbox"
                                ref={articleDogTrailer}
                                id="4"                                
                            />
                            <Form.Check                                
                                label={t('articleSup')}
                                name="Sup"
                                type="checkbox"
                                ref={articleSup}
                                id="5"
                            />                                                  
                        </Form.Group>                    
                    </>
                    }

                    {formIsForUpgrade && 
                    <>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('labelBatteryCapacity')}</Form.Label>                                           
                            <Form.Select 
                                aria-label="Default select example"
                                ref={batteryCapacity}
                            >                                
                                <option value="522Wh">{t('batteryCapacity522')}</option>
                                <option value="630Wh">{t('batteryCapacity630')}</option>
                                <option value="700Wh">{t('batteryCapacity700')}</option>
                            </Form.Select>
                        </Form.Group>                        
                    </>
                    }

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                            <Form.Label>{t('labelMessage')}</Form.Label>
                            <Form.Control                    
                                type="text"
                                as="textarea" rows={6}  
                                ref={message}
                            />                
                        </Form.Group>


                    <div className='d-flex flex-column'>                        
                        <Button className="mt-2 text-uppercase" variant="secondary" type="submit" disabled={isSending}>
                        {isSending ?
                            <ArrowRepeat size={20} className='icon-spin'/>:
                            t('sendInquiry')                                
                        }                  
                        </Button>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal;