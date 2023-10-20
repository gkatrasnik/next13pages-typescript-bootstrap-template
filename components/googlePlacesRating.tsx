import Image from "next/image";
import DisplayRatingStars from "./displayRatingStars";
import { FC } from 'react';

interface GooglePlacesRatingProps {
    rating: number;
}

const GooglePlacesRating: FC<GooglePlacesRatingProps> = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <Image 
            src='/logo/google-logo.png' 
            width={150} 
            height={50} 
            alt='Google Places Logo'
            style={{
                objectFit: 'contain'
            }}
        />
        <div className="d-flex">
            <p className="google-places-rating-text h3">{props.rating.toFixed(1)}</p>
            <DisplayRatingStars rating={props.rating} color='gold' size={24}/>
        </div>
    </div>
    
  );
}

export default GooglePlacesRating;