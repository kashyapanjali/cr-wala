import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Packages.css";

function Packages() {
  // State to track the selected package
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageData, setPackageData] = useState([]); // State to hold package data

  // Fetch package data from API
  useEffect(() => {
    // Uncomment the following code to fetch package data from an API
    /*
    fetch('/api/packages')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPackageData(data); // Set the fetched package data
      })
      .catch(error => {
        console.error('Error fetching package data:', error);
      });
    */

    // Example static package data (remove this when using API)
    const staticPackageData = [
      {
        id: 1,
        name: "Starter Pack",
        price: "₹5,000",
        features: ["Social Media Promotion", "Press Release"],
      },
      {
        id: 2,
        name: "Pro Pack",
        price: "₹15,000",
        features: ["Social Media Promotion", "Press Release", "Blog Features"],
      },
      {
        id: 3,
        name: "Enterprise Pack",
        price: "₹30,000",
        features: ["All Features + 1:1 PR Consultation"],
      },
    ];
    setPackageData(staticPackageData); // Set static data for now
  }, []);

  // Function to handle the package selection
  const handleChoosePlan = (pkg) => {
    setSelectedPackage(pkg);
    alert(`You have selected the ${pkg.name}!`);
    // You can perform further actions like redirecting or updating the UI.
  };

  return (
    <section id="packages" className="packages">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our PR Packages
      </motion.h2>
      <div className="packages-container">
        {packageData.map((pkg) => (
          <motion.div
            className="package-card"
            key={pkg.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: pkg.id * 0.2 }}
          >
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ff9800",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
              onClick={() => handleChoosePlan(pkg)}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
      {/* Optionally, display the selected package */}
      {selectedPackage && (
        <div className="selected-package">
          <h3>You have selected: {selectedPackage.name}</h3>
          <p>{selectedPackage.price}</p>
        </div>
      )}
    </section>
  );
}

export default Packages;
