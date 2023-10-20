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
        <DisplayRatingStars rating={props.rating} color='gold' size={20}/>
    </div>
    
  );
}

export default GooglePlacesRating;