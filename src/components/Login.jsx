// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
        <form action="" className="login-form">
            <h2 className="login-heading">Login</h2>
            
            <input type="text" id="username" name="username" className="login-input"placeholder="username" /> <br />

            
            <input type="password" id="password" name="password" className="login-input" placeholder="password"/> <br />

            <button type="submit" className="login-button">
                Submit
            </button>

            <p className="login-signup">
                Don't have an account? <Link to="/signup">Sign in</Link>
            </p>
            <Link to="/" className="go-home">Go Home</Link>
        </form>
    </div>
  );
}

export default Login;
