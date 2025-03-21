import "./Footer.css";
import logo from "../assets/logo.jpg"; // Import the logo correctly

const Footer = () => {
  return (
    <footer className="footer-container" id="contact">
      <div className="footer-content">
        {/* Logo on the left */}
        <img src={logo} alt="Elovon Gym Logo" className="logo" />

        {/* Copyright text on the right */}
        <span>© {new Date().getFullYear()} All rights reserved. Designed by Thasneem.</span>
      </div>
    </footer>
  );
};

export default Footer;
