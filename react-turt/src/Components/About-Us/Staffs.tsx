import React from 'react'
import './About.css'

type Props = {}

const Staffs = (props: Props) => {
  return (
    <div className='staff-background'>
    <div className='staffs-container'>
        <div className='staffs-title'>
            <h1 className='staffs-title'>Meet Our Staff</h1>
        </div>
        <div className='staffs-cards-container'>
            <div className='staffs-card'>
                <h2>John Doe</h2>
                <p>CEO</p>
                <button className='get-in-touch' onClick={()=>{
                    alert('Contact John Doe via gmail: johndoe.akromahnyame@gmail.com');
                }}>GET IN TOUCH</button>
            </div>
            <div className='staffs-card'>
               
                <h2>Jane Smith</h2>
                <p>Secretary</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
            </div>
            <div className='staffs-card'>
               
                <h2>Jane Smith</h2>
                <p>Head of Marketing</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
            </div>
            <div className='staffs-card'>
                
                <h2>Bob Johnson</h2>
                <p>Operations Manager</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
            </div>
            <div className='staffs-card'>
                <h2>Bob Johnson</h2>
                <p>Head of IT Department</p>
                <button className='get-in-touch'>GET IN TOUCH</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Staffs