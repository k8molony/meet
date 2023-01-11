import React from "react";
import './WelcomeScreen.css';
import logo from './img/logo.png';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
  (
    <div className="WelcomeScreen">
      <div className="welcome-container">
        <div className="logo-header-container">
        <img
          src={logo}
          alt="Meet App logo"
          className="logo"
        />
        <h1>Welcome to the Meet app</h1>
        </div>
        <h4>
          Log in to see upcoming events around the world for full-stack developers
        </h4>
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img 
                className="google-icon" 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button 
              onClick={() => { props.getAccessToken() }}
              className="btn-text"
              rel="nofollow noopener"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
          <a 
            href="https://k8molony.github.io/meet/privacy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </a>
        </div>
      </div>
    )
  : null
}

export default WelcomeScreen;