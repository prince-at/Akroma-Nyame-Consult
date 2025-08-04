import React, { useState } from "react";
import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
 
 const HotelReservationForm = () => {
   const [showForm, setShowForm] = useState(false);
   const [room, setRoom] = useState("");
   const [otherRoom, setOtherRoom] =useState("");
   const [specificHotel, setSpecificHotel]=useState("");
   const [otherSpecificHotel, setOtherSpecificHotel]= useState("");
   const [pending, setPending] = useState(false);
 
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     alert("Application Submitted!");
     setPending(true);
     setShowForm(false);
     // Send pending message to user's email
    // emailjs.send(
    //   "YOUR_SERVICE_ID", // replace with your EmailJS service ID
    //   "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
    //   {
    //     to_email: email,
    //     message: "Your hotel reservation is pending approval.",
    //   },
    //   "YOUR_USER_ID" // replace with your EmailJS user ID
    // ).then(
    //   (result) => {
    //     console.log("Email sent", result.text);
    //   },
    //   (error) => {
    //     console.log("Email error", error.text);
    //   }
    // );
   };
 
   return (
     <div>
       <button onClick={() => setShowForm(true)} className="apply-now">
         Apply for Hotel Reservation
       </button>
 
      {showForm && (
   <div className="form-modal">
     <div
       className="form-container"
       style={{
         maxHeight: '95vh',
         overflowY: 'auto',
         scrollbarWidth: 'thin',
         scrollbarColor: '#888 #f1f1f1',
         
         paddingRight: '10px',
         maxWidth: '450px',
         margin: '0 auto',
       }}
     >
       <span className="close" onClick={() => setShowForm(false)}>
         &times;
       </span>
       <h2 className="education">Please Submit form for further Processing.</h2>
       <form onSubmit={handleSubmit} id="formSubmit">
         <input type="text" placeholder="Full Name (as on passport)" required />
          <select required className="country-select">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="nationality" placeholder="Nationality" required />
         <input type="email" placeholder="Email" required />
         <input type="number" placeholder="Contact Number" required pattern="[0-9]+" inputMode="numeric"/>
         <input type="number" placeholder="Alternate Contact Number" required pattern="[0-9]+" inputMode="numeric"/>
         <input type="number" placeholder="Emergency contact (name, relation, and number)" required pattern="[0-9]+" inputMode="numeric"/>
         <input type="text" placeholder="Current Address" required />
         <h1 className="certificate">Travelling Details</h1>
         <input type="text" placeholder="Valid Passport Number" required />
         <input type="text" placeholder="Destination Country & City" required />
         <label>
            <h1 className="certificate">Check-in Date</h1>
            <input type="date" required/>
         </label>
         <label>
            <h1 className="certificate">Check-out Date</h1>
            <input type="date" required/>
         </label>
         <h1 className="certificate">Room Preferences</h1>
         <select required className="country-select" value={room}
         onChange={e=> setRoom(e.target.value)}>
            <option value="">Room type</option>
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
            <option>Other</option>

         </select>
         {room ==="Other"&&(
            <input type="Other" required placeholder="Enter Room type"
            value={otherRoom} onChange={e=>setOtherRoom(e.target.value)}/> )}

             <select required className="country-select">
            <option value="">Bed preference</option>
            <option>King size</option>
            <option>Queen size</option>
            <option>Twin</option>
         </select>
         <h1 className="certificate">Smoking Alergies</h1>
         <select required className="country-select">
            <option value="">Choose </option>
            <option>Yes</option>
            <option>Partially</option>
            <option>No</option>
         </select>
         <h1 className="certificate">Do you have a specific Hotel you want?</h1>
         <select required className="country-select" value={specificHotel}
         onChange={e=>setSpecificHotel(e.target.value)}>
            <option value="">Hotel Preferences</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
         </select>
         {specificHotel ==="Yes"&&(
            <input type="Yes" required placeholder="Enter Hotel Name & Address"
            value={otherSpecificHotel} onChange={e=>setOtherSpecificHotel(e.target.value)}/>
         )}
          <h1 className="certificate">Upload Document ( Scanned Passport, Passport Picture, Medicals, Flight Ticket, etc.)</h1>
         <input type="file" accept=".pdf,.doc,.docx" required />
         <textarea placeholder="Why do you want to need this Hotel?"  />
         <button type="submit">Submit</button>
       </form>
     </div>
   </div>
 )}
  {pending && (
        <div className="pending-message" style={{ marginTop: '20px', color: 'orange', fontWeight: 'bold' }}>
          Your hotel reservation is pending approval.
        </div>
      )}
     </div>
   );
 };
 
 export default HotelReservationForm;