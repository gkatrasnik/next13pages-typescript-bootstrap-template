import { Star, StarHalf, StarFill } from 'react-bootstrap-icons';
import { FC } from 'react';

interface DisplayRatingStarsProps {
    rating: number;
    color?: string;
    size?: number;
}

const DisplayRatingStars: FC<DisplayRatingStarsProps> = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <span key={index} className='mx-1'>
            {props.rating >= ratingValue ? (
              <StarFill color={props.color} size={props.size}/>
            ) : props.rating >= ratingValue - 0.5 ? (
              <StarHalf color={props.color} size={props.size}/>
            ) : (
              <Star color={props.color} size={props.size}/>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default DisplayRatingStars;