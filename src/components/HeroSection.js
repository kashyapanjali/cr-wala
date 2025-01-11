import React, { useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const scrollToPackages = () => {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
};

function HeroSection() {
  const welcomeMessage = "";

  // Uncomment the following code to fetch data from an API
  /*
  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await fetch('/api/welcome-message');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWelcomeMessage(data.message);
      } catch (error) {
        console.error('Error fetching welcome message:', error);
      }
    };

    fetchWelcomeMessage();
  }, []);
  */

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to CR Wala</h1>
        <p className="hero-description">
          {welcomeMessage || "Your one-stop solution for PR marketing services. Discover tailored packages to elevate your brand's presence."}
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ff9800", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
          aria-label="Explore our PR marketing packages"
          onClick={scrollToPackages}
        >
          Explore Packages
        </motion.button>
      </motion.div>
    </section>
  );
}

export default HeroSection;
