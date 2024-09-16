import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favpla from "./components/Favpla";
import MainSection from "./components/MainSection";
import BlogSection from "./components/BlogSection";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Favpla />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
