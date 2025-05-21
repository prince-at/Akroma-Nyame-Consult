import React from 'react'
import globe from '../../assets/d42a7e09-73be-4861-8138-18313028530e@1x_1-1.jpg'
import '../About-Us/About.css'

type Props = {}

const VisionStatement = (props: Props) => {
  return (
    <div className='who-are-we'>
        
        <div className='vision-background'>
            <h1 className='vision-statement'>Who are we? ✈️ </h1>
            <p className='vision-statement-paragraph'>We're a passionate team of Recruiters, and adventure-seekers. 
                Our mission is simple: to provide exceptional recruitment services to the
travel and tourism industry, delivering high-quality candidates
who meet the needs of our clients. We strive to build long-term relationships with our clients and candidates, promoting mutual growth and success." </p>
              <div>  <button className='vision-statement-button'>Read More</button></div>   
        </div>
        <div className='imag-can'>
        <img src={globe} alt='globe' className='globe' />
        <img src={globe} alt='globe' className='globe' />
        <img src={globe} alt='globe' className='globe' />
        
        </div>
      
    </div>
  )
}

export default VisionStatement