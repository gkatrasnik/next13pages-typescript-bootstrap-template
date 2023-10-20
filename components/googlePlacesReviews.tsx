import { FC } from "react"
import GoogleReviewCard from "./googleReviewCard"
import { useState, useRef, useEffect} from 'react'
import {Stack, Button, Container, Row, Col} from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

interface GooglePlacesReviewsProps {
    reviews: GooglePlaceReview[]
}

const GooglePlacesReviews: FC<GooglePlacesReviewsProps> = (props) => {
    const [isScrollable, setIsScrollable] = useState<boolean>(false);
    const reviews = useRef<HTMLSpanElement>(null);

    const scrollLeft = () => {
        if (reviews.current) {
          reviews.current.scrollLeft -= 320;
        }
      }
    
      const scrollRight = () => {
        if (reviews.current) {
          reviews.current.scrollLeft += 320;
        }
      }
    
      useEffect(()=>{
        setIsScrollable(!!(reviews.current && (reviews.current.scrollWidth > reviews.current.clientWidth)));
      }, [])

    return (         
        <Container className="mb-5">
            <Row>
                <Col>
                    <div className="google-reviews">
                        {isScrollable && 
                        <Button aria-label="previous review" className='google-reviews-nav-button left text-white' variant="secondary" onClick={scrollLeft}><ChevronLeft size={28}/></Button>      
                        }
                        <Stack direction="horizontal" ref={reviews} className="google-reviews-content align-items-start">          
                            {props.reviews.map((review, index) => {
                                return (
                                    <div className="mx-3" key={index}>
                                        <GoogleReviewCard review={review} />
                                    </div>
                                )
                            })}  
                        </Stack>
                        {isScrollable && 
                        <Button aria-label="next review" className='google-reviews-nav-button right text-white' variant="secondary" onClick={scrollRight}><ChevronRight size={28}/></Button>
                        }
                    </div>   
                </Col>
            </Row>
        </Container>

        
    )
}

export default GooglePlacesReviews;