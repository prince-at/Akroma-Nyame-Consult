import { Link } from "react-router-dom"
import logo from "../assets/WhatsApp Image 2025-04-07 at 3.12.19 PM.png"; // Adjust the path as needed
import './Pages/Css/Footer.css'
import Subscribe from "./Subscribe";


const FooterPage = () => {
  return (
    <footer className="footer">
          <div className="footer-content">
            <div className="footer-row">
          <div className="footer-logo">
            <img src={logo} alt="Company Logo" className="footer-logo-img" />
            
          </div>
          <div className="footer-links">
            <h2 className="sub-news">Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/services">Service</Link>
            <Link to="/book">Book</Link>
          </div>
          <div className="footer-contact">
            <h2 className="sub-news">Contact:</h2>
            <p>Located: Accra, Nungua Market </p>
            <p>Email: ant.consult@gmail.com</p>
            <p>Office: +233 257 34 4490</p>
            <p>Phone: +233 50 231 1638</p>
            </div>
            <div className="footer-social">
            <h2 className="sub-news">Follow Us</h2>
            <p>Facebook <a href="https://facebook.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
            <p>TikTok <a href="https://twitter.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
            <p>Instagram <a href="https://instagram.com/akromanyame" target="_blank" rel="noopener noreferrer"></a></p>
            </div>
            <div className="footer-subscribe">
            <h2 className="sub-news">Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest offers and travel tips.</p>
            <span className="footer-subscribe"><Subscribe/></span>
            </div>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Akroma Nyame Travel and Tour. All rights reserved.
          </div>
        </div>
    </footer>
  )
}

export default FooterPage