import React from "react";

function TrendingPage() {
  return (
    <div>
      <div
        className="banner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
          backgroundColor: "white",
          color: "red",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <div>
          <span>OH</span>
          <br />
          <span>MY</span>
          <br />
          <span>DISNEY</span>
        </div>
      </div>
      <ul className="menu-section">
        <li className="menu-section-heading goc-mobile-subnav-title" style={{ textAlign: "center" }}>
          <a href="#" className="goc-mobile goc-icn-2">
          <hr
              className="separator"
              style={{
                borderTop: "5px solid red",
                margin: "1px 0",
                width: "200%", // Adjust the width to your desired value
              }}
            />

          </a>
        </li>
        <ul className="goc-mobile menu-subsection">
          <li>
            <a href="https://www.disney.sg/ohmydisney/all-articles" className="goc-mobile">
              Oh My Disney
            </a>
          </li>
          <li>
            <a href="https://www.disney.ph/disneystyle/all-articles" className="goc-mobile">
              Disney Style
            </a>
          </li>
          <li>
            <a href="https://www.disney.ph/disneyfamily/all-articles" className="goc-mobile">
              Disney Family
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default TrendingPage;
