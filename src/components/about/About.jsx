
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section"  id="about"                   >
      <div className="about-container">
        <h2 className="about-title">About Inter LMG Arm Wrestling</h2>
        <p className="about-description">
          At <strong>Inter LMG Arm Wrestling</strong>, we bring the passion and spirit of arm wrestling closer to you. 
          Our platform is designed for arm wrestling enthusiasts, professionals, and newcomers who share a love for this thrilling sport. 
          From premium-quality equipment to expert tips and training tools, we are here to support your journey in arm wrestling.
        </p>
        <p className="about-mission">
          <strong>Our Mission:</strong> To revolutionize the arm wrestling community by providing top-notch products and creating a supportive platform for athletes to grow and compete.
        </p>
        <div className="about-highlights">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>💪 A wide range of arm wrestling equipment tailored for professionals and beginners.</li>
            <li>🎯 Expert advice and training materials to enhance your skills.</li>
            <li>🌟 A passionate community that shares the love for arm wrestling.</li>
            <li>🔒 Trusted, durable, and high-performance products.</li>
          </ul>
        </div>
        <p className="about-vision">
          Our vision is to make arm wrestling accessible to everyone, fostering a global community of strong, determined, and passionate athletes. 
          Whether you are gearing up for your first match or preparing for championships, Inter LMG Arm Wrestling is your ultimate companion.
        </p>
        <p className="about-cta">
          Ready to embrace the challenge? Let’s arm wrestle and grow stronger together!
        </p>
      </div>
    </section>
  );
};

export default About;
