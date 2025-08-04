import serviceImage from "../../assets/front-view-young-female-with-bag-preparing-trip-holding-ticket-white-background-color-sun-voyage-tourist-vacation-rest-flight-plane.jpg"
import "./Css/Services.css"
import serviceImage2 from "../../assets/close-up-man-holding-tickets.jpg"
import travelDoc from "../../assets/day-office-travel-agency.jpg"
import travelDoc2 from "../../assets/place-flying-sunset-sky.jpg"
import ServiceContent from '../scene/ServiceContent'
import SecondServiceSection from "../SecondServiceSection"

type Props = {}

const Services = (props: Props) => {
  return ( 
    <>
    
    <div className='services'>
      <img src={serviceImage} alt='service-image' className='service-image' />
      <div className="empowering">EMPOWERING TALENT. ENABLING TRAVEL. BUILDING GLOBAL CAREERS. 
         {/* <h1 className='services-title'>Our Services</h1> */}
      </div>
       
    </div>
    <div>
      <div>
  
      <div className='services-list'>

        <div className='service-item'>
          <div className="paragraph-container">
          <p className='service-paragraph-1'>we specialize in connecting top-tier talent with exceptional opportunities in the travel, tourism, Employment and hospitality industry — locally and internationally. Whether you're a business seeking skilled professionals or a candidate looking to build a career abroad, we’re here to guide you every step of the way.
          </p>
          
          </div>
          
        </div>
        </div>
        <hr/>
        <div className='service-main-container'>
        
        <div className='service-title-container'>
          <img src={serviceImage2} alt='serviceImage2' className='service-image2' />
          <h1 className='text-on-expertise'>Our Expertise: Crafting-results Driven Campaigns for our Traveling Agency.</h1>
          <div className="stack-image-container">
            <div className='stack-image-cont-1'>
              <img src={travelDoc} alt='travelDoc' className='travel-doc-image'/>
              <div className="hover-overlay">
        <p className="hover-text">Let's Assist you for all your Traveling Documents:
        <br/>Flight Ticket, Visa, Passport, Work Permit, Residency Permit & ID, ETC
        </p>
        
      </div>
            </div>
            <div className='stack-image-cont-1'>
              <img src={travelDoc2} alt='travel-doc' className='travel-doc-image'/>
              <div className="hover-overlay">
        <p className="hover-text">Do you want to Travel to any part of World for :
        <br/>Work, Study, Visit, or Tour? 
        </p>
      </div>
              
            </div>
          </div>

        </div>
        
        </div>
         <SecondServiceSection/>
      </div>

    </div>
    
    <div>
     
    </div>
    </>
  )
}

export default Services