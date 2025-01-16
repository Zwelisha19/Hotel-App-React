
import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

function TermsAndConditions() {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <p>
                Welcome to HavenStay. By accessing and using our services, you agree to comply
                with the following terms and conditions. These terms apply to all visitors, users,
                and others who access or use the service.
            </p>
            
            <h2>Booking and Payment</h2>
            <p>
                - Bookings are subject to availability. <br />
                - Payments are non-refundable except under specific conditions as per our
                  cancellation policy.
            </p>

            <h2>Check-In/Check-Out</h2>
            <p>
                - Check-in is available from 2:00 PM. Check-out time is at 10:00 AM.<br />
                - Late check-outs are subject to additional charges.
            </p>

            <h2>Privacy</h2>
            <p>
                Your privacy is important to us. We handle your data with care, in line with our
                privacy-policy
            </p>

            <h2>Limitation of Liability</h2>
            <p>
                HavenStay is not liable for any direct, indirect, or consequential damages that may arise from your stay or use of our website.
            </p>

            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default TermsAndConditions;
