// import React from "react";
// import { ChevronRight } from "lucide-react";
// import "./App.css";; // Import the CSS file

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       {/* Header */}
//       <header className="header">
//         <h1>RemoteCollab</h1>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="#features">Features</a></li>
//             <li><a href="#pricing">Pricing</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>
      
//       {/* Hero Section */}
//       <section className="hero">
//         <h2>Collaborate Remotely, Efficiently</h2>
//         <p>A modern remote work collaboration tool that helps teams stay connected, organized, and productive.</p>
//         <button className="hero-btn">
//           Get Started <ChevronRight size={20} />
//         </button>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;



import React, { useState } from "react";
import Slider from "react-slick"; // Import React Slick for the slider
import { ChevronRight, Menu, X } from "lucide-react";
import Login from "./Login"; // Import Login Component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"; // Ensure CSS is linked

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="landing-page">
      {/* ✅ Header */}
      <header className="header">
        <h2>LinkUp</h2>

        {/* ✅ Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>

        {/* ✅ Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ✅ Image Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div className="slide">
            <img src="../src/assets/image1.png" alt="Team Collaboration" />
            {/* <div className="overlay">
              <h2>Slide 1: Work Together, Anytime, Anywhere</h2>
              <p>Seamless remote collaboration with real-time updates.</p>
            </div> */}
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <img src="../src/assets/image2.png" alt="Virtual Meetings" />
            {/* <div className="overlay">
              <h2>Slide 2: Enhance Your Productivity</h2>
              <p>Stay connected and boost efficiency with our platform.</p>
            </div> */}
          </div>
        </Slider>
      </div>

      {/* ✅ Hero Section */}
      <section className="hero">
        <h2>Collaborate Remotely, Efficiently</h2>
        <p>A modern remote work collaboration tool that helps teams stay connected, organized, and productive.</p>
        <button className="hero-btn" onClick={() => setShowLogin(true)}>
          Get Started <ChevronRight />
        </button>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@linkup.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Follow us on social media</p>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} LinkUp. All Rights Reserved.</p>
          <nav className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>

      {/* ✅ Login Popup */}
      {showLogin && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
