
// import '/src/Pages/home.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';
// import { useState } from 'react'; 

// function Home() {
//     const [showLoginMessage, setShowLoginMessage] = useState(false); 

//     const handleBookNowClick = () => {
//         setShowLoginMessage(true); 
//     };

//     return (
//         <div className="home-container">
//             <div className='top-div'>
//                 <div>
//                     <p>Tel: 012 467 7889</p>
//                 </div>
//             </div>
//             <div className='second-div'>
//                 <div className='logo-div'>
//                     <img src="src/assets/images/Logo.PNG" alt="logo" />
//                 </div>
//                 <div id='rooms-div'>
//                     <Link to={"/"}><p>Home</p></Link>
//                 </div>
              
//             <div className="book-now-div">
//                 <button className='book-now-btn' onClick={handleBookNowClick}>
//                     Book Now
//                 </button>
//             </div>
//                 <div>
//                     <p>Map</p>
                   
//                     <Link to={"/Login"}>
//                         <button 
//                             className='register-btn' 
//                             onClick={() => setShowLoginMessage(true)} 
//                         >
//                             Login
//                         </button>
//                     </Link>
//                 </div>
//             </div>

    
//             {showLoginMessage && (
//                 <div className="login-message">
//                     <p>Please log in to access your account.</p>
//                 </div>
//             )}

//             <div className='background-div'>
//                 <img src="src/assets/images/wallpaper.png" alt="Picture of Hotel" />
//                 <div className='overlay-text'>
//                     <h1>Welcome to HavenStay</h1>
//                     <p>Your perfect stay, just a click away</p>
//                 </div>
//             </div>

//             <div className='accommodation-text'>
//                 <p>Accommodation</p>
//             </div>
//             <div className='rooms-displayed'>
//                 <div className='each-room'>
//                     <div className='each-room-image'>
//                         <img src="src/assets/images/Room1.png" alt="standard room image" />
//                     </div>
//                     <div className='each-room-info'>
//                         <p className='room-type'>Rooms</p>
//                         <p>Each room is air-conditioned, en suite, with tea and coffee making facilities. There is also a small work table and chair, flat screen TV, OpenView, DSTV in Bar/Restaurant. High-quality linen including towels is provided.</p>
//                     </div>
//                 </div>
//                 <div className='each-room'>
//                     <div className='each-room-image'>
//                         <img src="src/assets/images/Room1.png" alt="Executive room image" />
//                     </div>
//                     <div className='each-room-info'>
//                         <p className='room-type'>Various rooms to choose from</p>
//                         <p>Double, Twin, single and family rooms available</p>
//                     </div>
//                 </div>
//                 <div className='each-room'>
//                     <div className='each-room-image'>
//                         <img src="src/assets/images/Room1.png" alt="en suite image" />
//                     </div>
//                     <div className='each-room-info'>
//                         <p className='room-type'>Air-conditioned Rooms</p>
//                         <p>Has air-conditioned rooms</p>
//                     </div>
//                 </div>
//             </div>

            

//             <div className='amenities-div'>
//                 <p>Featured Amenities</p>
//             </div>

//             <div className='amenities-icons-div'>
//                 <div className='amenity-item'>
//                     <i className="fa-solid fa-wifi"></i>
//                     <p>Free WiFi</p>
//                 </div>
//                 <div className='amenity-item'>
//                     <i className="fa-solid fa-utensils"></i>
//                     <p>Meal Service</p>
//                     <p>Enjoy a variety of delicious meals, including breakfast, lunch, and supper, served fresh daily.</p>
//                 </div>
//                 <div className='amenity-item'>
//                     <i className="fa-solid fa-spa"></i>
//                     <p>Spa Services</p>
//                 </div>
//                 <div className='amenity-item'>
//                     <i className="fa-solid fa-baby-carriage"></i>
//                     <p>Family Friendly</p>
//                 </div>
//                 <div className='amenity-item'>
//                     <i className="fa-solid fa-car"></i>
//                     <p>Secure Parking</p>
//                 </div>
//                 <div className='amenity-item'>
//                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/slippers.png" alt="slippers" />
//                     <p>Slippers</p>
//                 </div>
//             </div>

//             <div className='about-us'>
//                 <p className='about-us-title'>About Us</p>
//                 <div>
//                     <p>Welcome to HavenStay Hotel, your inviting retreat located in Mabopane, just a short drive from Pretoria. Our hotel combines modern comfort
//                         with local charm, making it the perfect base for both leisure and adventure.
//                         Mabopane is a vibrant community rich in culture and history, offering visitors a unique glimpse into South African life.
//                         From the stunning nature reserves to the bustling markets, there’s something for everyone. Just a stone’s throw away,
//                         Pretoria boasts attractions like the Union Buildings, the Pretoria National Botanical Garden, and the historical Voortrekker Monument.
//                         Whether you’re exploring the sights of Pretoria or immersing yourself in the local culture of Mabopane,
//                         HavenStay Hotel is the ideal stopover for travelers. Join us for an unforgettable experience in this captivating region!</p>
//                 </div>
//             </div>
//             <div className='location-div'>
               
//             </div>
//             <footer className='footer'>
//                 <div className='contact-info'>
//                     <p>Tel: 012 976 6748</p>
//                     <p>Fax: 012 976 6741</p>
//                     <p>Email: info@havenstay.com</p>
//                     <p>Physical Address: 255 Mashaba Street, Pretoria, 0200</p>
//                     <p>Postal Address: PostNet Suite #06, Private Bag X12, Menlo Park, 0102</p>
//                 </div>
//                 <div className='social-media'>
//                     <a href="https://wa.me/0797760201" target="_blank" rel="noopener noreferrer">
//                         <i className="fa-brands fa-whatsapp"></i>
//                     </a>
//                     <a href="https://www.facebook.com/profile.php?id=61567849498888" target="_blank" rel="noopener noreferrer">
//                         <i className="fa-brands fa-facebook"></i>
//                     </a>
//                     <a href="https://twitter.com/havenstay" target="_blank" rel="noopener noreferrer">
//                         <i className="fa-brands fa-twitter"></i>
//                     </a>
//                 </div>
//                 <div className='terms'>
//                     <p><Link to="/terms">Terms and Conditions</Link></p>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Home;






















import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

function Home() {
    const [showLoginMessage, setShowLoginMessage] = useState(false); 

    const handleBookNowClick = () => {
        setShowLoginMessage(true); 
    };

    return (
        <div className="home-container">
            <div className='top-div'>
                <div>
                    <p>Tel: 012 467 7889</p>
                </div>
            </div>
            <div className='second-div'>
                <div className='logo-div'>
                    <img src="src/assets/images/Logo.PNG" alt="logo" />
                </div>
                <div id='rooms-div'>
                    <Link to={"/"}><p>Home</p></Link>
                </div>
              
                <div className="book-now-div">
                    <button className='book-now-btn' onClick={handleBookNowClick}>
                        Book Now
                    </button>
                </div>
                <div>
                    <Link to="/map">
                        <p>Map</p>
                    </Link>
                    <Link to={"/Login"}>
                        <button 
                            className='register-btn' 
                            onClick={() => setShowLoginMessage(true)} 
                        >
                            Login
                        </button>
                    </Link>
                </div>
            </div>

    
            {showLoginMessage && (
                <div className="login-message">
                    <p>Please log in to access your account.</p>
                </div>
            )}

            <div className='background-div'>
                <img src="src/assets/images/wallpaper.png" alt="Picture of Hotel" />
                <div className='overlay-text'>
                    <h1>Welcome to HavenStay</h1>
                    <p>Your perfect stay, just a click away</p>
                </div>
            </div>

            <div className='accommodation-text'>
                <p>Accommodation</p>
            </div>
            <div className='rooms-displayed'>
                <div className='each-room'>
                    <div className='each-room-image'>
                        <img src="src/assets/images/Room1.png" alt="standard room image" />
                    </div>
                    <div className='each-room-info'>
                        <p className='room-type'>Rooms</p>
                        <p>Each room is air-conditioned, en suite, with tea and coffee making facilities. There is also a small work table and chair, flat screen TV, OpenView, DSTV in Bar/Restaurant. High-quality linen including towels is provided.</p>
                    </div>
                </div>
                <div className='each-room'>
                    <div className='each-room-image'>
                        <img src="src/assets/images/Room1.png" alt="Executive room image" />
                    </div>
                    <div className='each-room-info'>
                        <p className='room-type'>Various rooms to choose from</p>
                        <p>Double, Twin, single and family rooms available</p>
                    </div>
                </div>
                <div className='each-room'>
                    <div className='each-room-image'>
                        <img src="src/assets/images/Room1.png" alt="en suite image" />
                    </div>
                    <div className='each-room-info'>
                        <p className='room-type'>Air-conditioned Rooms</p>
                        <p>Has air-conditioned rooms</p>
                    </div>
                </div>
            </div>

            

            <div className='amenities-div'>
                <p>Featured Amenities</p>
            </div>

            <div className='amenities-icons-div'>
                <div className='amenity-item'>
                    <i className="fa-solid fa-wifi"></i>
                    <p>Free WiFi</p>
                </div>
                <div className='amenity-item'>
                    <i className="fa-solid fa-utensils"></i>
                    <p>Meal Service</p>
                    <p>Enjoy a variety of delicious meals, including breakfast, lunch, and supper, served fresh daily.</p>
                </div>
                <div className='amenity-item'>
                    <i className="fa-solid fa-spa"></i>
                    <p>Spa Services</p>
                </div>
                <div className='amenity-item'>
                    <i className="fa-solid fa-baby-carriage"></i>
                    <p>Family Friendly</p>
                </div>
                <div className='amenity-item'>
                    <i className="fa-solid fa-car"></i>
                    <p>Secure Parking</p>
                </div>
                <div className='amenity-item'>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/slippers.png" alt="slippers" />
                    <p>Slippers</p>
                </div>
            </div>

            <div className='about-us'>
                <p className='about-us-title'>About Us</p>
                <div>
                    <p>Welcome to HavenStay Hotel, your inviting retreat located in Mabopane, just a short drive from Pretoria. Our hotel combines modern comfort
                        with local charm, making it the perfect base for both leisure and adventure.
                        Mabopane is a vibrant community rich in culture and history, offering visitors a unique glimpse into South African life.
                        From the stunning nature reserves to the bustling markets, there’s something for everyone. Just a stone’s throw away,
                        Pretoria boasts attractions like the Union Buildings, the Pretoria National Botanical Garden, and the historical Voortrekker Monument.
                        Whether you’re exploring the sights of Pretoria or immersing yourself in the local culture of Mabopane,
                        HavenStay Hotel is the ideal stopover for travelers. Join us for an unforgettable experience in this captivating region!</p>
                </div>
            </div>
            <div className='location-div'>
                <Link to="/map">
                    <p>Map</p>
                </Link>
            </div>
            <footer className='footer'>
                <div className='contact-info'>
                    <p>Tel: 012 976 6748</p>
                    <p>Fax: 012 976 6741</p>
                    <p>Email: info@havenstay.com</p>
                    <p>Physical Address: 255 Mashaba Street, Pretoria, 0200</p>
                    <p>Postal Address: PostNet Suite #06, Private Bag X12, Menlo Park, 0102</p>
                </div>
                <div className='social-media'>
                    <a href="https://wa.me/0797760201" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61567849498888" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/havenstay" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
                <div className='terms'>
                    <p><Link to="/terms">Terms and Conditions</Link></p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
