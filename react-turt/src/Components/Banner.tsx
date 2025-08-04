import React from 'react'
import bannerImage from '../assets/photo-1725977098424-19ea46553f23.avif'
import "./scene/Banner.css"
import { FaArrowRight } from 'react-icons/fa6'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
        <div>
            </div> 
            {/* <div className='akroma-nyame'>
                <h1 className='antnt'> WORK OR STUDY IN UAE, EUROPE, AUSTRALIA ETC..</h1>
            </div> */}

        
        <div className='ban-co'>
            
            <img src={bannerImage} alt='bannerImage' className='banner' />
            <h1 className='antnt'> WORK OR STUDY IN UAE, EUROPE, AUSTRALIA, CANADA, UK, ETC..</h1>
            <h1 className='uae-test'>
                
                we turn your travel dreams into unforgettable adventures. 
                Whether you re seeking thrilling escapades, cultural experiences, work, schooling, romantic getaways, 
                or relaxing retreats, our expertly curated tours and personalized travel services 
                ensure every journey is seamless and memorable. 
                From exotic destinations to hidden gems.
                {/* <button className='banner-button'>See more </button> */}
            </h1> 
           

        </div>
         
    </div>
  )
}

export default Banner