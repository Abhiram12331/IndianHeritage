import React from "react";
import "./Favpla.css";
function Favpla() {
    return (
      <section id="fiji-holyday">
        <div className="container">
          <h3>The Great Indian Cities</h3>
          <ul className="card-wrapper">
            <li className="card">
              <img src="images/slider/delhi.jpg" alt="Delhi" />
              <h3><a href="#">Delhi</a></h3>
              <p>The Capital of India</p>
            </li>
            <li className="card">
              <img src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg" alt="Mumbai" />
              <h3><a href="#">Mumbai</a></h3>
              <p>The financial Capital Of India</p>
            </li>
            <li className="card">
              <img src="images/slider/banglore.jpg" alt="Bangalore" />
              <h3><a href="#">Bangalore</a></h3>
              <p>Silicon Valley Of India</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Favpla;
  