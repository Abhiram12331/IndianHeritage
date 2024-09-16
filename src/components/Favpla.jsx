import React from "react";
import "./Favpla.css";
function Favpla() {
    return (
      <section id="fiji-holyday">
        <div className="container">
          <h3 className="h33">The Great Indian Cities</h3>
          <ul className="card-wrapper">
            <li className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfrFnpJq7-bwgK5Og0pdkD6tKH8C1KEByng&s" alt="Delhi" />
              <h3><a href="#">Delhi</a></h3>
              <p>The Capital of India</p>
            </li>
            <li className="card">
              <img src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg" alt="Mumbai" />
              <h3><a href="#">Mumbai</a></h3>
              <p>The financial Capital Of India</p>
            </li>
            <li className="card">
              <img src="https://www.euroschoolindia.com/wp-content/uploads/2024/02/20-Facts-About-Bangalore-Students-Should-Know.jpg" alt="Bangalore" />
              <h3><a href="#">Bangalore</a></h3>
              <p>Silicon Valley Of India</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Favpla;
  