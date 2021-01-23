import React from "react";
import { Search } from "react-bootstrap-icons";

function navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Wut Movie?
          </a>
          <div className="input-group">
            <span className="input-group-append search-input">
              <span className="input-group-text bg-transparent search-input">
                <Search color="rgb(250, 216, 50, 0.8)"  />
              </span>
            </span>
            <input className="form-control" type="text" value="looking for movie or series?" />
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
        .container {
          border: 0.2px solid rgb(250, 216, 50, 0.5);
          background-color: #303030;
        }
        a {
          opacity: 85%;
          color: #fad832;
        }
        .search-input {
          border: #303030;
          color: rgb(250, 216, 50, 0.8);
        }
        .form-control {
          color: #121211;
          border-radius: 0px;
          border: #303030;
          background-color: rgb(250, 216, 50, 0.4);
        }
        .form-control:focus {
          border-color: #ffdc33;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(250, 216, 50, 0.4);
                  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(250, 216, 50, 0.4);
        }
      `}</style>
    </div>
  );
}

export default navbar;
