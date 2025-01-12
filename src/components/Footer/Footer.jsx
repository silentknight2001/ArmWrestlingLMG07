
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-disclaimer">
        Disclaimer:   
        The information on this website is provided for general purposes related to arm wrestling. While we aim for accuracy, we do not guarantee the completeness or reliability of the content. Use the information at your own discretion. For inquiries, contact us at the provided email address.
      </p>
      <p className="footer-copyright">
        © 2024 PRATHAM BHOWMICK - All rights reserved.
      </p>
      <p>                      </p>
      <p className="footer-design">
      Designed and developed for Inter LMG Arm Wrestling - by <span style={{ color: "red", fontSize: "20px" }}>nextGenhub_website</span>. Need a website to grow your business ?, contact{" "}


        <a href="mailto:coderknight77@gmail.com" className="footer-link">
        coderknight77@gmail.com
        </a>.
      </p>
      <nav className="footer-nav">
        <a href="#home" className="footer-nav-link">Home</a>
        <a href="#products" className="footer-nav-link">Products</a>
        <a href="#about" className="footer-nav-link">About</a>
        <a href="#contact" className="footer-nav-link">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
