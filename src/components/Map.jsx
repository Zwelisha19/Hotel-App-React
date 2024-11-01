import React from 'react';
import './map.css'; 

const Map = () => {
    return (
        <div className="map-container">
            <h2>Our Location</h2>
            <p>Physical Address: 255 Mashaba Street, Pretoria, 0200</p>
            <iframe
                title="HavenStay Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.88233673202!2d27.9821345!3d-25.7550265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95e5c7a73d62db%3A0xe8e6d75aa1c64a4d!2sMabopane!5e0!3m2!1sen!2sza!4v1638266243743!5m2!1sen!2sza"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Map;
