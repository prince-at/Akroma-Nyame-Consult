import React from 'react'
import picture from '../assets/united-kingdom.jpg'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div className='full-container-portfolio'>
        <div className='portfolio-text-container'>
            <h1 className='portfolio-text'>Our Portfolio</h1>
            <p className='portfolio-text-2'>At Akromah Nyame Consult, we're passionate about creating 
                Job Opportunities, giving job offers, travel experiences that inspire and delight 
                our customers. With years of expertise in the travel industry, 
                we've crafted a portfolio providing jobs for Ghanaians to Travel and work abroad and experiences 
                and showcase the beauty, culture, and adventure of destinations around the world. </p>
            <p className='portfolio-text-2'>Our Expertise:
            - <strong>Destination Knowledge:</strong> Our team of travel experts has extensive knowledge of destinations worldwide, 
            ensuring that every offer is carefully planned and executed.
            - <strong>Customized T  ours: </strong>We offer tailored tours that cater to individual interests, 
            preferences, and budgets.
            - <strong>Unique Experiences:</strong> From cultural immersion to outdoor adventures, 
            we curate experiences that go beyond the ordinary.</p>
            <p className='view-all'><a href='#'>Learn more...</a></p>
        </div>
            <img src= {picture} alt={picture} className='uk-picture'/>
    </div>
  )
}

export default Portfolio