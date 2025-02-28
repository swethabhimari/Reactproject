import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import global styles
import logo from "../assets/logo.png"; // ✅ Import logo
import image1 from "../assets/image1.png"; // ✅ First right-side image
import image2 from "../assets/image2.png"; // ✅ Second right-side image

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay"></div> {/* ✅ Full dark overlay */}

      <div className="content">
        {/* ✅ Logo */}
        <img src={logo} alt="RemoteCollab Logo" className="logo" />

        <h1>Welcome to RemoteCollab</h1>
        <p>Seamless collaboration for remote teams.</p>

        {/* ✅ Navigation Button */}
        <button className="get-started-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

      {/* ✅ Right-Side Images */}
      <div className="right-images">
        <img src={image1} alt="Feature 1" className="right-image-1" />
        <img src={image2} alt="Feature 2" className="right-image-2" />
      </div>
      

    </div>
    
  );
};

export default LandingPage;
