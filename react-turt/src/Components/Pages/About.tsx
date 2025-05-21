import React from 'react'
import download from '../../assets/front-view-young-female-with-bag-preparing-trip-holding-ticket-white-background-color-sun-voyage-tourist-vacation-rest-flight-plane.jpg'
import civil from '../../assets/civil-work.jpg'
import VisionStatement from '../About-Us/VisionStatement'
import Staffs from '../About-Us/Staffs'
import Vision from '../About-Us/Vision'
import Subscribe from '../Subscribe'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
    <div className='about-us'>
        <div className='image-container'>
          <img src={download} alt='download' className='about-us-image'/> </div>
        <div className='about-us-header'>
            
           
        <div className='about-us-text-container'>
        <h1 className='about-us-page'>About Us</h1>
        </div>

        </div>
    </div>
    <div>
    <VisionStatement/>
    <Staffs/>
    <Vision/>
    <Subscribe/>
    </div>
    
    </div>
  )
}

export default About