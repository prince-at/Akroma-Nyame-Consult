import React from 'react'
import './Css/Contact.css'
import contact from '../../assets/telephone-and-hand.jpeg'
import ContactCompo from '../ContactCompo'
import Subscribe from '../Subscribe'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <>
    <div className='contacts'>
      <img src={contact} alt='Contact' className='contact-background-image'/>
        <div>
          <h1 className='contact-header'>Contact Us</h1>
         

        </div>
        
    </div>
    <div><ContactCompo/> </div>
  
    </>
  )
}

export default Contacts