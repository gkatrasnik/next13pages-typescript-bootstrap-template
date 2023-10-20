import Card from 'react-bootstrap/Card';
import { FC } from 'react';
import DisplayRatingStars from './displayRatingStars';
import Image from 'next/image';

interface GoogleReviewCardProps {
    review: GooglePlaceReview
    }

const GoogleReviewCard: FC<GoogleReviewCardProps> = (props) => {
  return (
    <Card className='google-review-card border-0'>      
      <Card.Body>
        <div className='d-flex align-items-center mb-3'>
          <Image 
              src={props.review.profile_photo_url} 
              width={50} 
              height={50} 
              alt='Google Places Logo'
              style={{
                  objectFit: 'contain',
                  marginRight: '1rem'
              }}
            />
            <div>
              <div className='h5 mb-0'>          
                {props.review.author_name}
              </div>
              <div className='p small text-muted '>
                {props.review.relative_time_description}
              </div>
            </div>          
        </div>        
        <div className='mb-3'>
          <DisplayRatingStars rating={props.review.rating} color='gold' size={24}/>
        </div>
        <Card.Text className="google-review-card-text">
            {props.review.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GoogleReviewCard;