import React, { useState } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeShow } from './images/eye-show.svg';
import { ReactComponent as EyeHide } from './images/eye-hide.svg';

import './Login.scss';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='login'>
      <div className='header-wrapper'>
        <div className="header">
          <a href='#' className='header-logo'>
            <img src={logo} alt="logo" />
          </a>
          <div className='logo-btns'>
            <a href="#" className='login-btn login-b'>Log In</a>
            <a href="#" className='login-btn registration-b'>Sign up</a>
          </div>
        </div>
      </div>

      <div className="login-box">
        <div className="login-box-wrapper">
          <h1 className='login-box-title'>Login</h1>
          <input type="text" placeholder='Email*' className="login-input" />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              className="login-input"
            />
            <span className="eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeShow/> : <EyeHide/>}
            </span>
            </div>

            <Link to="/quiz">
  <button className="login-confirm-btn">Confirm</button>
</Link>
        </div>
      </div>
    </div>
  );
}
