// import React from 'react'
import "./index.css";
import logo from "../../../assets/logo.png";

export const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-container">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <img src={logo} alt="metaritic app" width={90} height={50} />
          <h1
            style={{
              color: "white",
              margin: 0,
              marginLeft: "-15px",
              marginBottom: "5px",
            }}
          >
            metaritic
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};
