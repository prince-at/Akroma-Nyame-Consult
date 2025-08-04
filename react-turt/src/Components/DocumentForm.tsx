 import React, { useState } from "react";
 import './Pages/Css/ApplyForm.css'; // Adjust the path as necessary
 
 const DocumentForm = () => {
   const [showForm, setShowForm] = useState(false);
   const [country, setCountry] = useState("");
   const [otherCountry, setOtherCountry] = useState("");
 
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     alert("Application Submitted!");
     setShowForm(false);
   };
 
   return (
     <div>
       <button onClick={() => setShowForm(true)} className="apply-now">
         Apply for Traveling Document
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
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Full Name (as on passport)" required />
          <input type="text" placeholder="Date of Birth  (DD/MM/YYYY)" required />
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
         <h1 className="certificate">Attached Document Details</h1>
         <input type="text" placeholder="Valid Passport Number" required />
         <select required className="country-select">
            <option value="">Document Type</option>
            <option value="Visit Visa">Visit Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Work Permit">Work Permit</option>
            <option value="Residency Permit">Residency Permit</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Diplomatic Visa">Diplomatic Visa</option>
            <option value="Flight Ticket Booking">Flight Ticket Booking</option>
            <option value="Ghana Passport">Ghana Passport</option>
         </select>
         <select
           required
           className="country-select"
           value={country}
           onChange={e => setCountry(e.target.value)}
         >
           <option value="">Desired travel destination(s)</option>
           <option value="Dubai">Dubai</option>
           <option value="Saudi Arabia">Saudi Arabia</option>
           <option value="Qatar">Qatar</option>
           <option value="Albania">Albania</option>
           <option value="Portugal">Portugal</option>
           <option value="Italy">Italy</option>
           <option value="Canada">Canada</option>
           <option value="Australia">Australia</option>
           <option value="Germany">Germany</option>
           <option value="Malaysia">Malaysia</option>
           <option value="France">France</option>
           <option value="Japan">Japan</option>
           <option value="China">China</option>
           <option value="India">India</option>
           <option value="Singapore">Singapore</option>
           <option value="Other">Other</option>
           {/* Add more countries as needed */}
         </select>
         {country === "Other" && (
           <input
             type="text"
             placeholder="Enter Country"
             value={otherCountry}
             onChange={e => setOtherCountry(e.target.value)}
             required
           />
         )}  
      
          <h1 className="certificate">Upload Document (CV, Scanned Passport, Passport Picture, Medicals etc.)</h1>
         <input type="file" accept=".pdf,.doc,.docx" required />
         <textarea placeholder="Why do you want to need this Document?"  />
         <button type="submit">Submit</button>
       </form>
     </div>
   </div>
 )}
     </div>
   );
 };
 
 export default DocumentForm;
 