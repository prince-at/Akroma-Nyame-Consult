import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/WhatsApp Image 2025-04-07 at 3.12.19 PM.png"; // Adjust the path to your logo image
import IconsListRen from "./Components/IconsListRen";
import BelowSlider from "./Components/BelowSlider";
import ListCountry from "./Components/ListCountry";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services"; // Import the Services component
// Import the About component

const headText1 = "Home"; // Define headText1 with an appropriate value
const headText2 = "About"; // Define headText2
const headText3 = "Service"; // Define headText3
const headText4 = "Contact"; // Define headText4
const headText5 = "Blog"; // Define headText5
const headText6 = "Book"; // Define headText6

import { useState, useEffect } from "react";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Pages/Blog";
import BookingPage from "./Components/Pages/BookingPage";
import MarqueeText from "./Components/MarqueeText";
import WorkAbroadBlog from "./Components/Pages/WorkAbroadBlog";
import StudyAbroadBlog from "./Components/Pages/StudyAbroadBlog";
import HotelBlog from "./Components/Pages/HotelBlog";
import Banner from "./Components/Banner";
import WorkDescription from "./Components/WorkDescription";
import ApplyStudyAbroad from "./Components/ApplyStudyAbroad";
import PassionHome from "./Components/PassionHome";
import PlaceToStudy from "./Components/PlaceToStudy";
import IncomingReviewContainer from "./Components/IncomingReviewContainer";
import Contacts from "./Components/Pages/Contacts";
import FooterPage from "./Components/FooterPage";


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <Router>
      <nav className={`header ${scrolled ? "scrolled" : ""}`}>
        <div>
          {" "}
          <img src={logo} alt="Company Logo" className="companyLogo" />
        </div>
        <div className="navMenu">
          <ul className="navList">
            <li>
              <Link to="/" className="text-size">
                {headText1}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-size">
                {headText2}
              </Link>
            </li>
            <div className="iconList">
              <li>
                <Link to="/services" className="text-size">
                  {headText3}
                </Link>
              </li>
            </div>
            <li>
              <Link to="/contact" className="text-size">
                {headText4}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-size">
                {headText5}
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-size">
                {headText6}
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className='buttons'><BookingButton textButton="Book" /></div> */}
      </nav>

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ul>
                  <Banner />{" "}
                </ul>
                <ul>
                  <MarqueeText />
                </ul>
                <ul>
                  <IconsListRen />
                </ul>
                <hr />

                <ul>
                  <BelowSlider />
                </ul>
                <div>
                  <ListCountry />
                </div>
                
                {/* <div className='see-more-button'>
            <button style={{ fontSize: '1.2rem' }}>see more</button>
            <FaArrowRight className='arrow-icon' style={{ fontSize: '1rem', color: 'black', marginLeft: '10px' }} />
            </div> */}
         
                <div>
                  <PassionHome />
                </div>
                <div>
                  <PlaceToStudy />
                </div>
                <div>
                  
                  {/* <PlaceToStudySecondSection /> */}
                </div>
                <div>
                  <Portfolio />
                </div>
                <div>
                  <IncomingReviewContainer />
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/work-abroad" element={<WorkAbroadBlog />} />
          <Route path="/study-abroad" element={<StudyAbroadBlog />} />
          <Route path="/hotel-reservation" element={<HotelBlog />} />
          <Route path="/work-description" element={<WorkDescription />} />
          <Route path="/study-abroad-details" element={<ApplyStudyAbroad />} />
          <Route path="/study-abroad-details" element={<ApplyStudyAbroad />}/>
          
        </Routes>
      </div>
      <div>
      
        <div className="footer-container">
        <FooterPage />
      </div>
     
      </div>
      </Router>
      
      </>
  );
}

export default App;
