import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/WhatsApp Image 2025-04-07 at 3.12.19 PM.png'; // Adjust the path to your logo image
import Slider from './Components/Slider';
import CountriesContainer from './Components/CountriesContainer';
import IconsListRen from './Components/IconsListRen';
import BelowSlider from './Components/BelowSlider';
import ListCountry from './Components/ListCountry';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services'; // Import the Services component
 // Import the About component

const headText1 = "Home"; // Define headText1 with an appropriate value
const headText2 = "About"; // Define headText2
const headText3 = "Service"; // Define headText3
const headText4 = "Contact"; // Define headText4
const headText5 = "Blog"; // Define headText5
const headText6 = "Book"; // Define headText6

import React, { useState, useRef, useEffect } from 'react';
import BookingButton from './Components/BookingButton';
import Portfolio from './Components/Portfolio';
import TopDestination from './Components/TopDestination';
import Subscribe from './Components/Subscribe';
import { Contact } from 'lucide-react';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import BookingPage from './Components/Pages/BookingPage';
import MarqueeText from './Components/MarqueeText';
import WorkAbroadBlog from './Components/Pages/WorkAbroadBlog';
import StudyAbroadBlog from './Components/Pages/StudyAbroadBlog';
import HotelBlog from './Components/Pages/HotelBlog';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
   const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  return (
    <Router>
      
      <nav className='header'>
      <div> <img src={logo} alt="Company Logo" className="companyLogo" /></div>
      <div className='navMenu'>
          
        <ul className='navList'>
          <li><Link to="/" className='text-size'>{headText1}</Link></li>
          <li><Link to="/about" className='text-size'>{headText2}</Link></li>
          <div className='iconList'>
          <li><Link to="/services" className='text-size3' onClick={toggleDropdown}>{headText3}</Link></li>
            {isDropdownOpen && (
                      <ul className="dropdown" ref={dropdownRef as React.RefObject<HTMLUListElement>}>
                       <a > <li>Work Aboard</li></a>
                       <hr/>
                          <li><a href="#">Flight Ticket</a></li>
                          <hr />
                          <li><a href="#">Hotel Reservation</a></li>
                          <hr />
                          <li><a href="#">Travel Insurance</a></li>
                          <hr />
                          <li><a href="#">Visa Assistance</a></li>
                          <hr />
                          <li><a href="#">Passport Assistance</a></li>
                          <hr />
                          <li><a href="#">Birth Certificate</a></li>
                          <hr />
                          <li><a href="#">Study Abroad</a></li>
                      </ul>
                    )}
                    </div>
          <li><Link to="/contact" className='text-size'>{headText4}</Link></li>
          <li><Link to="/blog" className='text-size'>{headText5}</Link></li>
          <li><Link to="/book" className='text-size'>{headText6}</Link></li>
        </ul>
        </div>
        {/* <div className='buttons'><BookingButton textButton="Book" /></div> */}
      </nav>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <ul><Slider /></ul>
              <ul><MarqueeText/></ul>
              <ul><IconsListRen /></ul>
              <hr/>
              
              <ul><BelowSlider /></ul>
              <div className="countries-container"><CountriesContainer /></div>
              <div><ListCountry /></div>
              <div><Portfolio/></div>
              <h1 className='top-destination'>TOP DESTINATIONS ✈️</h1>
              <hr/>
              <div><TopDestination/></div>
              <div><TopDestination/></div>
              <div><Subscribe/></div>
              {/* <div className='review-container'><Reviews/></div> */}
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/book' element={<BookingPage/>} />
          <Route path="/work-abroad" element={<WorkAbroadBlog/>} />
          <Route path="/study-abroad" element={<StudyAbroadBlog/>}/>
          <Route path="/hotel-reservation" element={<HotelBlog/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;