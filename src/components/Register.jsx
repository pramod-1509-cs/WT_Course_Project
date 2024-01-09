import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="login-container">
        <form action="" className="login-form">
            <h2 className="login-heading">Register</h2>
            
            <input type="text" id="username" name="username" className="login-input"placeholder="username" /> <br />

            
            <input type="password" id="password" name="password" className="login-input" placeholder="password"/> <br />

            <button type="submit" className="login-button">
                Submit
            </button>

            <p className="login-signup">
                Already have an account? <Link to="/login">Sign up</Link><br />
                
            </p>
            <Link to="/" className="go-home">Go Home</Link>
        </form>
    </div>
  );
}

export default Register;
