import React from 'react';
// import './App.css';

const Header = () => {
  return (
    <div id="Header">
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a href="#Header" className="nav-item">My Company</a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">

            <div className="nav-item">
              <p className="control">
                <a href="#Header" className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Join Now</span>
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
