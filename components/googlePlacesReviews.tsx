import GoogleReviewCard from "./googleReviewCard"
import { useState, } from 'react'
import {Carousel} from 'react-bootstrap';

interface GooglePlacesReviewsProps {
    reviews: GooglePlaceReview[]
}

const GooglePlacesReviews = (props: GooglePlacesReviewsProps) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };

    return (        
        <Carousel className="google-reviews-carousel" activeIndex={index} onSelect={handleSelect} variant="dark">
            {props.reviews.map((review, index) => {
                return (                                
                    <Carousel.Item key={index}>
                        <div className="google-review-card-container" >
                            <GoogleReviewCard review={review} />
                        </div>
                    </Carousel.Item>
                )
            })}  
        </Carousel>        
    )
}

export default GooglePlacesReviews;