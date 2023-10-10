function GoogleMap() {
    return (
        <div className="d-flex justify-content-center google-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.6232686883195!2d14.089461377456296!3d46.35702087342581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a913b40574511%3A0x65bbc42c5f560b98!2sA%26B%20KOLO%20d.o.o.!5e0!3m2!1sen!2ssi!4v1696065223507!5m2!1sen!2ssi" 
                title="AB Bike Google Map"
                className="google-map" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    );
}

export default GoogleMap;