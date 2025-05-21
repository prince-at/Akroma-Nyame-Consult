import React from "react"
import pic from "../assets/5d0e7bdbec56a.jpg"
type Props = {}

const BelowSlider = (props: Props) => {
  return (
    <>
    <div className="belowSlider">

        <div className="wel-text"> 
            <h1 className="head-line">Welcome to<br/> Akroma Nyame CONSULT</h1> 
            
          
       <p className="text-line">
        At Akroma Nyame Consult, we believe that every journey should be extraordinary. 
        <br/>Whether you're dreaming of a tropical escape, a cultural city tour,
        <br/>
        or an off-the-beaten-path adventure, we're here to make it happen.
        </p>
        <button className="btn-view-details">View Details</button>
        </div>
        <div> <img src={pic} alt="picture" className="welcome-pic" /></div>
       
        </div>
        </>
  )
}

export default BelowSlider