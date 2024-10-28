import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";  

function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;  

        try {
            await sendPasswordResetEmail(auth, emailVal);  
            alert("Check your email");
            navigate("/login");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="reset-div">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Enter your email" required />
                <button type="submit">Reset</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
