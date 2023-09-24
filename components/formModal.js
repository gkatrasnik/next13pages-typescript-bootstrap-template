import { useRef } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {useTranslations} from 'next-intl';


function FormModal({formIsForRent, formIsForTransform, handleClose}) {
    const t = useTranslations('FormModal');

    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const address = useRef();
    const dateTime = useRef();
    const rentLength = useRef();
    const articleEbike = useRef();
    const articleRegularBike = useRef();
    const articleChildTrailer = useRef();
    const articleDogTrailer = useRef();
    const message = useRef();
    const batteryCapacity = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create sendMail params
        // call sendMail

        await postSendEmail();
        handleClose();
    }

    const createEmail = () => 
    {
        //create a email text from form data

        return {
            "subject": "Novo povpraševanje! ",
            "text": "real test mail text"
        }
    }

    const postSendEmail = async (data) => {
        try {
            //const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/sendInquiry", {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/sendInquiry", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createEmail()),
            });

            const result = await response;
            console.log("Success:", result.statusText);
        } catch (error) {
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
                        <Form.Label>{t('labelName')}</Form.Label>
                        <Form.Control                    
                            type="text"
                            ref={name}
                        />                
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                        <Form.Label>{t('labelPhone')}</Form.Label>
                        <Form.Control                    
                            type="phone"
                            ref={phone}
                        />                
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                        <Form.Label>{t('labelEmail')}</Form.Label>
                        <Form.Control                    
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
                            <Form.Label>{t('labelDateTime')}</Form.Label>
                            <Form.Control                    
                                type="datetime-local"  
                                ref={dateTime}             
                            />                
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput5">
                            <Form.Label>{t('labelRentLength')}</Form.Label>
                            <Form.Control                    
                                type="text"
                                ref={rentLength}
                            />                
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('labelArticle')}</Form.Label>      
                            <div className='d-flex flex-column'>
                                <Form.Check
                                inline
                                label={t('articleEbike')}
                                name="eBike"
                                type="checkbox"
                                ref={articleEbike}
                                id="1"                                
                            />
                            <Form.Check
                                inline
                                label={t('articleRegularbike')}
                                name="regularBike"
                                type="checkbox"
                                ref={articleRegularBike}
                                id="2"
                            />
                            <Form.Check
                                inline
                                label={t('articleChildTrailer')}
                                name="childTrailer"
                                type="checkbox"
                                ref={articleChildTrailer}
                                id="3"
                            />
                            <Form.Check
                                inline
                                label={t('articleDogTrailer')}
                                name="dogTrailer"
                                type="checkbox"
                                ref={articleDogTrailer}
                                id="4"
                            />
                            </div>                                 
                            
                        </Form.Group>                    
                    </>
                    }

                    {formIsForTransform && 
                    <>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t('labelBatteryCapacity')}</Form.Label>                                           
                            <Form.Select 
                                aria-label="Default select example"
                                ref={batteryCapacity}
                            >                                
                                <option value="522">{t('batteryCapacity522')}</option>
                                <option value="630">{t('batteryCapacity630')}</option>
                                <option value="700">{t('batteryCapacity700')}</option>
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
                        <Button className="mt-2" variant="secondary" type="submit">
                            {t('sendInquiry')}
                        </Button>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal;