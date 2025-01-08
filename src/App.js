import React from "react";
import HeroSection from "./components/HeroSection";
import Packages from "./components/Packages";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Packages />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
