import logo from "../assets/visa_694756.png";
import logo2 from "../assets/plane-ticket_10577881.png";
import logo3 from "../assets/company_18528188.png";
import logo4 from "../assets/passport_18804459.png";
import { useNavigate } from "react-router-dom";

const IconsListRen = () => {
  const navigate = useNavigate();
  return (
    <div className="icon-field">
      <div
        className="icon-container1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/services")}
      >
        <img src={logo} alt="icon-name" className="visa" onClick={() => {}} />
        <h1 className="visa-text">Apply for Travelling Visa</h1>
      </div>
      <div
        className="icon-container1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/services")}
      >
        <img src={logo2} alt="icon-name" className="visa" onClick={() => {}} />
        <h1 className="visa-text">Apply Flight Ticket </h1>
      </div>
      <div
        className="icon-container1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/services")}
      >
        <img src={logo3} alt="icon-name" className="visa" onClick={() => {}} />
        <h1 className="visa-text">Apply for Hotel Booking</h1>
      </div>
      <div
        className="icon-container1"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/services")}
      >
        <img src={logo4} alt="icon-name" className="visa" onClick={() => {}} />
        <h1 className="visa-text">Passport Assistant</h1>
      </div>
    </div>
  );
};

export default IconsListRen;
