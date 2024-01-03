import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className="ring">
  <i style={{ "--clr": "#00ff0a" }}></i>
  <i style={{ "--clr": "#ff0057" }}></i>
  <i style={{ "--clr": "#fffd44" }}></i>
  <div className="login">
    <h2>Sign Up</h2>
    <div className="inputBx">
      <input type="text" placeholder="Username" />
    </div>
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
      <a href="/">Forget Password?</a>
      <a href="/">Login</a>
    </div>
  </div>
</div>

  )
}

export default Register