import React from "react";
import "./Header.css";
function Header() {
  return (

    <nav className="navbar navbar-expand-lg fixed-top ">
    <div className="container-fluid">
      <a className="navbar-brand logo colo" href="#">!NDIA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav nav-links">
          <a className="nav-link" href="#MainSection">Home</a>
          <a className="nav-link" href="#BlogSection">Blog</a>
          <a className="nav-link" href="#Footer">Contact us</a>
        </div>
      </div>
    </div>
  </nav>
  

  );
}

export default Header;
