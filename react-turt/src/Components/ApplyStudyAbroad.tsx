import React from 'react'
import student from "../assets/Ben-Headers-7.png.jpg"
import "././Pages/Css/Studying.css"
import { StudyingData } from './StudyList'
import { StudyingData2 } from './StudyLIst2'

type Props = {}

const ApplyStudyAbroad = (props: Props) => {
  return (
    <div>
       <div> 
            <div className="desc-im">
                <img src={student} alt="Work Description" className="im-for-desc"/>
                <h1 className="work-description-title-2">WHERE DO YOU WANT TO FURTHER YOUR EDUCATION?</h1>
                <p className="hiring">we help students like you turn their dreams of studying abroad into reality. Whether you’re aiming for world-class universities, international exposure, or career advancement, we’re here to guide you every step of the way.</p>
            </div>
            <div>
              <h1 className='destiny'>CHOOSE THE COUNTRY YOU WANT TO STUDY</h1>
              </div>
              <div className='studies-picx'>
                {StudyingData.map((study, index)=>{
                  return(
                    <div className='study' key={index}>
                      
                      <div>
                        <img src={study.picture} alt='study-well' className='study-picture'/>
                        <p className='study-offer' >{study.text} </p>
                        <p className='we-provide'>{study.text1}</p>
                        <ul>
                        <li className='we-provide1'>{study.list1} </li>
                        <li className='we-provide2'>{study.list2} </li>
                        <li className='we-provide3'>{study.list3} </li>
                        <li className='we-provide4'>{study.list4} </li>
                        <li className='we-provide5'>{study.list5} </li>
                        <li className='we-provide6'>{study.list6} </li>
                        <li className='we-provide7'>{study.list7} </li>
                        </ul>
                        {/* <div className='canada-flag-container'>
                    <img src={study.image} alt='canada' className='canada-flag'/></div> */}
                        <div className="applies-container4">
                    <button className="apply-for-work1">{study.text2}</button>
                    <button className="apply-for-work2">{study.text3}</button>
                </div>
                
                      <p className='hey'>{study.text}</p>

                      </div>
                    </div>
                  )
                }) }
              </div>
             <div className='studies-picx'>
                {StudyingData2.map((study, index)=>{
                  return(
                    <div className='study' key={index}>
                      
                      <div>
                        <img src={study.picture} alt='study-well' className='study-picture'/>
                        <p className='study-offer' >{study.text} </p>
                        <p className='we-provide'>{study.text1}</p>
                        <ul>
                        <li className='we-provide1'>{study.list1} </li>
                        <li className='we-provide2'>{study.list2} </li>
                        <li className='we-provide3'>{study.list3} </li>
                        <li className='we-provide4'>{study.list4} </li>
                        <li className='we-provide5'>{study.list5} </li>
                        <li className='we-provide6'>{study.list6} </li>
                        <li className='we-provide7'>{study.list7} </li>
                        </ul>
                        {/* <div className='canada-flag-container'>
                    <img src={study.image} alt='canada' className='canada-flag'/></div> */}
                        <div className="applies-container4">
                    <button className="apply-for-work1">{study.text2}</button>
                    <button className="apply-for-work2">{study.text3}</button>
                </div>
                
                      <p className='hey'>{study.text}</p>

                      </div>
                    </div>
                  )
                }) }
              </div>
                
            </div>
    </div>
  )
}

export default ApplyStudyAbroad