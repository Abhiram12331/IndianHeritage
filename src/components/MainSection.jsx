import React from "react";
import "../styles.css";
import "./MainSection.css";

function MainSection() {
  return (
    <main id="MainSection"> 
      <header>
  <div className="container">
    <div className="home_header_info">
      <h1 className="typewrite" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage." ]'></h1>
      <p>India is a country dotted with stunning wildlife diversity, and rich traditions. While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.</p>
      <a href="https://indianculture.gov.in/">Read More</a>
    </div>
  </div>
  <div className="video">
    <video id="video" autoPlay loop muted>
      <source type="video/mp4" src="\images\v1.mp4" />
    </video>
  </div>
</header>

<section id="welcome_Sec">
  <div className="container">
    <h2><span>Where science meets the sacred!</span></h2>
    <p>Witness the grand Architecture! How about taking your kids on an exploration of India's heritage this holiday season?</p>
  </div>
</section>

<section id="slides_parent">
  <div className="container">
    <div className="slides">
      <div className="slide_1">
        <div className="slide_info">
          <p>Modhera Sun Temple</p>
        </div>
      </div>
      <div className="slide_1 slide_2">
        <div className="slide_info">
          <p>Adi Annamalai temple</p>
        </div>
      </div>
      <div className="slide_1 slide_3">
        <div className="slide_info">
          <p>Western Ghats</p>
        </div>
      </div>
      <div className="slide_1 slide_4">
        <div className="slide_info">
          <p>Red Fort</p>
        </div>
      </div>
      <div className="slide_1 slide_5">
        <div className="slide_info">
          <p>Chhatrapati Shivaji Terminus</p>
        </div>
      </div>
      <div className="slide_1 slide_6">
        <div className="slide_info">
          <p>Bandipur National Park</p>
        </div>
      </div>
      <div className="slide_1 slide_7">
        <div className="slide_info">
          <p>Ganga Aarti</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}

export default MainSection;