import React from "react";

function sideMenu(props) {
  return (
    <div className="side-menu">
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
      <style jsx>
        {`
         .side-menu { 
          margin-top: 40px;
        }
        a { 
          background-color: #303030;
          text-opacity: 85%;
          color: rgb(250, 216, 50, 0.9);
        }
          .list-group-item { 
            margin: 3px;
          }
        `}
      </style>
    </div>
  );
}

export default sideMenu;
