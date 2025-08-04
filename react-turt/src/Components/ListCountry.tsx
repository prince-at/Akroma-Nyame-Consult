import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import '././Pages/Css/ListCountry.css'
import { CountriesList } from './scene/CountryList';
type Props = {};

import React, { useState } from 'react';

const ListCountry = (props: Props) => {
  const [liked, setLiked] = useState<boolean[]>(CountriesList.map(() => false));

  const handleLike = (index: number) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };
 
  return <div>
    
    <div className='list-country-container' >
        <div className='country1'>
          <h1 className='opportunity'>OUR JOB OFFER</h1>
             <div className='see-more-button'>
            <button style={{ fontSize: '1.2rem' }}>see more</button>
            <FaArrowRight className='arrow-icon' style={{ fontSize: '1rem', color: 'black', marginLeft: '10px' }} />
            </div>
            <div className='country-list'>
              {CountriesList.map((country, index) => {
                return (
                  <div key={index} className='country-item'>
                    <div className='container-for-image'>
                    <img src={country.image} alt={`${country.name} flag`} className='country-images' />
                    <div className='heart-icon' onClick={() => handleLike(index)} style={{ cursor: 'pointer' }}>
                        {liked[index] ? (
                          <FaHeart className="like-icon" style={{ color: 'red', marginLeft: '6px', fontSize: '1.5rem' , }} />
                        ) : (
                          <FaRegHeart className="like-icon" style={{ borderColor: 'gray', marginLeft: '7px', fontSize: '1.4rem' }} />
                        )}
                      </div>
                    </div>
                    <div className='span-text'>
                      <span className='work-country'>{country.name}</span>
                      <span>{country.title}</span>
                      <span className='process-duration'>{country.process}</span>
                      <button className='country-button'>{country.button}</button>
                    </div>
                    
                  </div>
                );
              })}
                
            </div>
            
        </div>
        
    </div>
   
  </div>;
};

export default ListCountry;
