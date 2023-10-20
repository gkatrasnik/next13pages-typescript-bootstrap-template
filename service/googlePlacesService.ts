import fetch from 'node-fetch';

export const fetchGooglePlacesData = async (): Promise<GooglePlaceDetails> => {
    const url = `${process.env.GOOGLE_PLACES_API_URL}?placeid=${process.env.GOOGLE_PLACES_PLACE_ID}&key=${process.env.GOOGLE_PLACES_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result; 
} 