// googlePlaces.d.ts

declare type AddressComponent = {
    long_name: string;
    short_name: string;
    types: string[];
  };
  
  declare type Period = {
    close: {
      date?: string;  // This field appears optional as it's not present in all the entries
      day: number;
      time: string;
    };
    open: {
      date?: string;  // This field appears optional as it's not present in all the entries
      day: number;
      time: string;
    };
  };
  
  declare type GooglePlaceOpeningHours = {
    open_now: boolean;
    periods: Period[];
    weekday_text: string[];
  };
  
  declare type Geometry = {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  
  declare type GooglePlacePhoto = {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  };
  
  declare type GooglePlaceReview = {
    author_name: string;
    author_url: string;
    language: string;
    original_language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
  };
  
  declare type PlusCode = {
    compound_code: string;
    global_code: string;
  };
  
  declare type GooglePlaceDetails = {
    address_components: AddressComponent[];
    adr_address: string;
    business_status: string;
    current_opening_hours?: GooglePlaceOpeningHours; // This seems optional since another 'opening_hours' key also exists
    formatted_address: string;
    formatted_phone_number: string;
    geometry: Geometry;
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    international_phone_number: string;
    name: string;
    opening_hours: GooglePlaceOpeningHours;
    photos: GooglePlacePhoto[];
    place_id: string;
    plus_code: PlusCode;
    rating: number;
    reference: string;
    reviews: GooglePlaceReview[];
    types: string[];
    url: string;
    user_ratings_total: number;
    utc_offset: number;
    vicinity: string;
    website: string;
  };
  
  declare interface GooglePlacesResponse {
    html_attributions: string[];
    result: GooglePlaceDetails;
    status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR';
  }
  