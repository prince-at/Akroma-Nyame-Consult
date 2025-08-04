import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../../src/Components/Pages/Css/PlaceToStudy.css'
import { PlaceToStudyData } from './PlaceToStudyList';
import { useState } from 'react';
import ApplyForm from './ApplyForm';
import { useNavigate } from 'react-router-dom';


const PlaceToStudy = () => {
  const [liked, setLiked] = useState<boolean[]>(Array(PlaceToStudyData.length).fill(false));
  const navigate = useNavigate();
  const handleLike = (index: number) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className='place-to-study-container'>
        <div className='abroad-container'>
        <div className='place-to-study-header'>
            <h1>Choose where to Study. </h1>
            <p className='place-to-study'>Study Abroad</p>
             <p className='certificate-of-study'>Let's help you with the top university abroad you can study.
                Degree Programmes, Master's Programmes, PhD Programmes, and more. fully funded scholarships opportunities available.
             </p>
             <ApplyForm />

        </div>
        <div className='place-to-study-content'>
            <div className='study-list1'>
                          {PlaceToStudyData.map((country, index) => {
                              
                            return (
                              <div key={index} className='study-item1'>
                                <div className='study-abroad-image'>
                                <img src={country.studyPicture1} alt='country-name' className='study-country-images' />
                                <div className='heart-icon-2' onClick={() => handleLike(index)} style={{ cursor: 'pointer' }}>
                                    {liked[index] ? (
                                      <FaHeart className="like-icon-2" style={{ color: 'red', marginLeft: '6px', fontSize: '1.5rem' , }} />
                                    ) : (
                                      <FaRegHeart className="like-icon-2" style={{ borderColor: 'gray', marginLeft: '7px', fontSize: '1.4rem' }} />
                                    )}
                                  </div>
                                  <p className='study-text-on-image'>{country.text}</p>
                                </div>
                                {/* <div className='span-text'>
                                  <span className='work-country'>{country.name}</span>
                                  <span>{country.title}</span>
                                  <span className='process-duration'>{country.process}</span>
                                  <button className='country-button'>{country.button}</button>
            
            
                                </div> */}
                                
                              </div>
                            );
                          })}
                        
                            
                        </div>
                        <div className='more-to-see'
                         onClick={()=>navigate('/study-abroad-details') }>
                  
                          <p>See more</p>
                          <FaArrowRight className='right'/>
                        </div>
              
        </div>
     
        </div>

    </div>
  )
}

export default PlaceToStudy