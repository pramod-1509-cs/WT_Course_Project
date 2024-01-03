import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="ring">
  <i style={{ "--clr": "#00ff0a" }}></i>
  <i style={{ "--clr": "#ff0057" }}></i>
  <i style={{ "--clr": "#fffd44" }}></i>
  <div className="login">
    <h2>Login</h2>
    <div className="inputBx">
      <input type="email" placeholder="Email" />
    </div>
    <div className="inputBx">
      <input type="password" placeholder="Password" />
    </div>
    <div className="inputBx">
      <input type="submit" value="Sign in" />
    </div>
    <div className="links">
      <a href="#">Forget Password?</a>
      <Link to="/signup">signup</Link>
    </div>
  </div>
</div>

  )
}

export default Login