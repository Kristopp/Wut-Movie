import React from "react";
import { Search } from "react-bootstrap-icons";

function navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Wut Movie?
          </a>
          <div className="input-group">
            <span className="input-group-append bg-white  border-left-0">
              <span className="input-group-text bg-transparent rounded-left border-right-0">
            <Search />
              </span>
            </span>

            <input className="form-control border-left-0 outline-none" />
          </div>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
      .
  
  
      `}</style>
    </div>
  );
}

export default navbar;
