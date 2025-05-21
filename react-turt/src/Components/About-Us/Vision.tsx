import React from 'react'
import '../Pages/Vision.css'
import vietnam from '../../assets/WhatsApp Image 2025-04-24 at 11.08.12 PM.jpeg'

type Props = {}

const Vision = (props: Props) => {
  return (
    <div className='vision-background-1'>
        <img src={vietnam} alt='Vietnam' className='vietnam-image'/>
        <div className='mission-statement'>
            <h1 className='mission-statement-title'> OUR VISION</h1>
            <p className='mission-statement-paragraph'>
            To be a trusted travel and tour recruitment agency, connecting<br/>
            talented professionals with exciting job opportunities worldwide,<br/>
            while fostering a culture of innovation, excellence, and customer satisfaction.
            </p>
            <p className='mission-statement-paragraph'>   
            <h1 className='mission-statement-title'>GOALS</h1>
            <strong>"Expand global reach:</strong> Establishing partnerships with international <br/>
            clients and candidates. <br/><strong>Foster long-term relationships:</strong>
            Building strong connections with clients and candidates, 
            ensuring repeat business and referrals.<br/><strong>Stay up-to-date with industry trends: </strong>
            Continuously monitoring industry developments and adapting services to meet evolving needs.

              </p>  
    </div>
    </div>
  )
}

export default Vision