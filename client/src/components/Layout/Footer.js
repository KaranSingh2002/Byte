import React from "react";
import { Link } from "react-router-dom";
import "../Layout/Styles/Footer.css"; // Adjust the path as per your project structure

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__col">
        <h4 className="footer__heading">About Us</h4>
        <ul>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Terms & Conditions</h4>
        <ul>
          <li>
            <Link to="/terms">Terms And Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Legal Notice</h4>
        <ul>
          <li>
            <Link to="/legal">Legal Notice</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Best Sales</h4>
        <ul>
          <li>
            <Link to="/bestsales">Best Sales</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Contact</h4>
        <ul>
          <li>
            <Link to="/contact">Customer Support</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Policy</h4>
        <ul>
          <li>
            <Link to="/policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 className="footer__heading">Follow Us</h4>
        <div className="footer__socials">
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:karansingh97622@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/karan-singh-ks2002">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer__bar">
        <p className="copyright">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
