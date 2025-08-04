import React from 'react'
import download from '../../images/depositphotos_481390158-stock-photo-handsome-young-guy-holding-bunch.jpg'
import civil from '../../assets/civil-work.jpg'
import VisionStatement from '../About-Us/VisionStatement'
import Staffs from '../About-Us/Staffs'
import Vision from '../About-Us/Vision'
import Subscribe from '../Subscribe'
import { FaGlobe, FaHeadset, FaRegStar, FaUser, FaUsers } from 'react-icons/fa'
import TheBrains from '../TheBrains'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
     
    <div className='about-us'>
      
        <div className='image-container'>
          <img src={download} alt='download' className='about-us-image'/> </div>
           <div className='nyame-tnt'>ABOUT AKROMA NYAME TRAVEL AND TOUR</div>
        
    </div>
    <div className='experiencex-field'>
          <div className='experiencex'>
            <div className='experience-item'>
              <div className='for-icons'>
               <FaUser size={20} color="#ce5263" className='icon-col' />
               </div>
              <h1 className='experience-title'>10+</h1>
              <p className='experience-text'>Years of Experience</p>
            </div >
            <div  className='experience-item'>
              <div className='for-icons'>
               <FaGlobe size={20} color="#ce5263" className='icon-col' />
               </div>
              <h1 className='experience-title'>500+</h1>
              <p className='experience-text'>Destinations</p></div>
            <div  className='experience-item'>
              <div className='for-icons'>
               <FaHeadset size={20} color="#ce5263" className='icon-col' />
               </div>
              <h1 className='experience-title'>24/7+</h1>
              <p className='experience-text'>Customer Service</p></div>
            <div  className='experience-item'>
              <div className='for-icons'>
               <FaUsers size={20} color="#ce5263" className='icon-col' />
               </div>
              <h1 className='experience-title'>98%</h1>
              <p className='experience-text'>Happy clients</p></div>
            
          </div>
        </div> 
    <div>
    <VisionStatement/>
    <Staffs/>
    <Vision/>
     <TheBrains/> 
    {/* <Subscribe/> */}
    </div>
    
    </div>
  )
}

export default About