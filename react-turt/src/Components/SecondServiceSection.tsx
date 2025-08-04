import "./scene/SecondServiceSection.css"
import WorkAbroad from "../assets/School-Africa-USA-Visa-Application-Guides.jpg"
import study from "../assets/Ben-Headers-7.png.jpg"
import travel from "../assets/After-School-Africa-USA-Visa-Application-Guide.jpg"
import air from "../images/close-up-man-prepared-traveling.jpg"
import hotel from "../../src/assets/receptionist-elegant-suit-work-hours-with-customer.jpg"
import { useNavigate } from 'react-router-dom'
import ServiceApplyForm from './ServiceApplyForm'
import WorkApplyForm from './WorkApplyForm'
import DocumentForm from './DocumentForm'
import HotelReservationForm from "./HotelReservationForm"


type Props = {}

const SecondServiceSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='cover-service-container'>
        <div className='contained-all-parts'>
            <div className='part-one'>01.</div>
            <div className='second-part'><h1 className='work-type' onClick={()=>navigate('/work-description') }> OUR WORK ABROAD OFFER</h1>
                <p className='countryoffers'>Choose your dream work in any of these Countries: 
                   Dubai, Canada, Austrialia, Luxembourg, Germany, etc. <a className='see-more' onClick={() => navigate('/work-description')}>see available jobs</a></p>
                <div className='picture-for-works' onClick={() => navigate('/work-description')}><img src={WorkAbroad} alt='work-abroad' className='working-abroad' /> </div>
                <WorkApplyForm/>
            </div>
        </div>
        
        <div className='contained-all-parts'>
            <div className='part-one'>02.</div>
            <div className='second-part'><h1 className='work-type' onClick={()=>navigate('/study-abroad-details') }> OUR STUDY OFFER ABROAD</h1>
                <p className='countryoffers'>We assist you to secure admission to Study in USA, UK, GERMANY, NEW ZEALAND, ETC. with scholarships opportunities or without scholarship.</p>
                <div className='picture-for-works' onClick={()=>navigate('/study-abroad-details') }><img src={study} alt='work-abroad' className='working-abroad' /> </div>
               <ServiceApplyForm/>
            </div>
        </div>
        
        
           <div className='contained-all-parts'>
            
            <div className='part-one'>03.</div>
            <div className='second-part'><h1 className='work-type'>WE ASSIST YOU IN PREPARING ALL YOUR TRAVELLING DOCUMENTS.</h1>
                <p className='countryoffers'>Travel Documents: Work VISA, Visit VISA, STUDENT VISA, Passport, Residency Permit, ID, Flight ticket, etc </p>
                <div className='picture-for-works'><img src={travel} alt='work-abroad' className='working-abroad' /> </div>
                <DocumentForm/>
            </div>
        </div>

      
       
          <div className='contained-all-parts'>
            
            <div className='part-one'>04.</div>
            <div className='second-part'><h1 className='work-type'> BOOK YOUR FLIGHT WITH US</h1>
                <p className='countryoffers'>Whether you're planning a business trip, family vacation, or a spontaneous getaway — we've got you covered.
                    Let's assist you with Affordable flight deals, Hassle-free booking process, Trusted global and local airlines, Personalized customer support.
                    We handle the details while you focus on the journey. </p>
                <div className='picture-for-works'><img src={air} alt='work-abroad' className='working-abroad' /> </div>
                <DocumentForm/>
            </div>
        </div>
        
               <div className='contained-all-parts'>
            
            <div className='part-one'>05.</div>
            <div className='second-part'><h1 className='work-type'> HOTEL RESERVATION ABROAD</h1>
                <p className='countryoffers'>We assist you to reserve the best relaxation and comfortable hotel rooms as you travel Abroad. </p>
                <div className='picture-for-works'><img src={hotel} alt='work-abroad' className='working-abroad' /> </div>
                <HotelReservationForm/>
            </div>
        </div>
       
       
        
    </div>
  )
}

export default SecondServiceSection