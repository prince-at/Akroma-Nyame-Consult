import React from 'react'
import './About.css'
import travel1 from '../../images/about-us11.jpg'
import travel2 from '../../images/about-us12.jpg'
import travel3 from '../../images/about-us13.jpg'
import travel4 from '../../images/about-us14.jpg'
type Props = {}

const Staffs = (props: Props) => {
  return (
    <div className='staff-background'>
    <div className='staffs-container'>
        <div className='staffs-image-container'>
            <div className='for-only-images'>
            <div className='staffs-image'>
                <img src={travel1} alt='travel-man' className='travel-man'/>
                <img src={travel2} alt='travel-man' className='travel-man-1'/>
            </div>
             <div className='staffs-image'>
                <img src={travel3} alt='travel-man' className='travel-man-2'/>
                <img src={travel4} alt='travel-man' className='travel-man-3'/>
            </div>
         </div>
            <div className='staff-div'>
                <h1 className='staffs-title'>We Make Travel Accessible and Enjoyable.</h1>
                <p className='staffs-text'>Our Vision is to be a trusted travel and tour recruitment agency, connecting
talented professionals with exciting job opportunities worldwide,
while fostering a culture of innovation, excellence, and customer satisfaction.</p>
<br/>           <div className='staffs-goals'>
                <h1>Our goals: </h1>
                <ul>
                    <li>"Expand global reach: Establishing partnerships with international clients and candidates.</li>
                    <li>Foster long-term relationships:Building strong connections with clients and candidates, ensuring repeat business and referrals.</li>
                    <li>Stay up-to-date with industry trends: Continuously monitoring industry developments and adapting services to meet evolving needs.</li>
                </ul>
                </div>
                <button className='packages-button'>Find packages</button>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Staffs